const BaseModule = require("./base");
const Profile = require("../classes/Profile");
const ProfileAvatar = require("../models/ProfileAvatar");

class ProfileModule extends BaseModule {
    async getMyProfile() {
        try {
            const profile = await new Profile(this.req.user.userId).fillFromDB();
            const avatar = await ProfileAvatar.findOne({ profileId: profile.id });

            this.res.json({...profile.toJSON(), avatar: avatar})
        } catch (e) {
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
        }
    }

    async setMyProfile() {
        try {
            const profile = await new Profile(this.req.user.userId).fillFromDB()
            profile.set(
                this.req.body.name,
                this.req.body.secondName,
                this.req.body.status,
                this.req.body.birthday,
                this.req.body.city,
                this.req.body.email
            )

            await profile.save();
            this.res.json(profile.toJSON());
        } catch (e) {
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
        }
    }
}

module.exports = ProfileModule
