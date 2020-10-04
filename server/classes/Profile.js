const ProfileModel = require('./../models/Profile')
const ObjectId = require("Mongoose").Types.ObjectId;


class Profile {
    constructor(userId, profileModel) {
        this.userId = userId;
        this.model = profileModel;
    }

    async fillFromDB() {
        this.model = await ProfileModel.findOne({ userId: this.userId });
        return this;
    }

    static async findById(profileId) {
        return ProfileModel.findById(profileId);
    }

    get id() {
        return this.model._id;
    }

    static async create({userId, name, secondName, status, birthday, city, email}) {
        const profile = new ProfileModel({userId, name, secondName, status, birthday, city, email});
        await profile.save();

        return new Profile(userId, profile);
    }

    set(name= '', secondName = '', status= '', birthday= new Date(), city= '', email='') {
        this.model.name = name;
        this.model.secondName = secondName;
        this.model.status = status;
        this.model.birthday = birthday;
        this.model.city = city;
        this.model.email = email;

        return this;
    }

    save() {
        return this.model.save();
    }

    toJSON() {
        return this.model.toJSON();
    }

    async listWithoutSelf() {
        const profilesAggregate = await ProfileModel.collection.aggregate([
            {$match: {_id: {$ne: ObjectId(this.model.id)}} },
            {$lookup:
                    {
                        from: "profileavatars",
                        localField: "_id",
                        foreignField: "profileId",
                        as: "avatar"
                    }
            },
            {$sort : {date: -1}}
        ]);

        const profiles = (await profilesAggregate.toArray()).map((user) => {
            user.avatar = user.avatar[0];
            return user;
        });

        return profiles;
    }

}

module.exports = Profile;
