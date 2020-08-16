const ProfileModel = require('server/models/Profile')

class Profile {
    async constructor(userId) {
        this.userId = userId;
        this.profileModel = await ProfileModel.findOne({ userId: userId });
    }

    async static create(userId, name, secondName, status, birthday, city, email) {
        const profile = new Profile({userId, name, secondName, status, birthday, city, email});
        await profile.save();
        this.profileModel = profile;

        return profile;
    }

    set(name= '', secondName = '', status= '', birthday= new Date(), city= '', email='') {
        this.profileModel.name = name;
        this.profileModel.secondName = secondName;
        this.profileModel.status = status;
        this.profileModel.birthday = birthday;
        this.profileModel.city = city;
        this.profileModel.email = email;
    }

    save() {
        return this.profileModel.save();
    }

}
