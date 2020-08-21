const AvatarModel = require('./../models/ProfileAvatar')

const allowedFields = [
    'accessory',
    'body',
    'clothing',
    'clothingColor',
    'eyebrows',
    'eyes',
    'facialHair',
    'graphic',
    'hair',
    'hairColor',
    'hat',
    'hatColor',
    'lashes',
    'lipColor',
    'mask',
    'mouth',
    'skinTone',
]

class Avatar {
    constructor(profileId, avatarModel) {
        this.profileId = profileId;
        this.model = avatarModel;
    }

    async fillFromDB() {
        this.model = await AvatarModel.findOne({ profileId: this.profileId });
        return this;
    }

    isFilled() {
        return !!this.model;
    }

    static async create(profileId) {
        const model = new AvatarModel({ profileId });
        await model.save();
        return new Avatar(profileId, model);
    }

    set(fields) {
        const fieldNames = Object.keys(fields);

        fieldNames.forEach((field) => {
            if (allowedFields.includes(field)) {
                this.model[field] = fields[field];
            }
        });

        return this;
    }

    save() {
        return this.model.save();
    }

    toJSON() {
        return this.model.toJSON();
    }
}

module.exports = Avatar;
