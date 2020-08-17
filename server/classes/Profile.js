const ProfileModel = require('./../models/Profile')

class Profile {
    constructor(userId) {
        this.userId = userId;
    }

    async fillFromDB() {
        this.profileModel = await ProfileModel.findOne({ userId: this.userId });
        return this;
    }

    get id() {
        return this.profileModel._id;
    }

    static async create(userId, name, secondName, status, birthday, city, email) {
        const profile = new ProfileModel({userId, name, secondName, status, birthday, city, email});
        await profile.save();
        this.profileModel = profile;
        return this;
    }

    set(name= '', secondName = '', status= '', birthday= new Date(), city= '', email='') {
        this.profileModel.name = name;
        this.profileModel.secondName = secondName;
        this.profileModel.status = status;
        this.profileModel.birthday = birthday;
        this.profileModel.city = city;
        this.profileModel.email = email;

        return this;
    }

    save() {
        return this.profileModel.save();
    }

    toJSON() {
        return this.profileModel.toJSON();
    }

}

module.exports = Profile;
