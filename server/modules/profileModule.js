const BaseModule = require("./base");
const Profile = require("../classes/Profile");
const ProfileAvatar = require("../models/ProfileAvatar");
const Avatar = require("../classes/Avatar");

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
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e });
        }
    }

    async editAvatar() {
        try {
            const profile = await new Profile(this.req.user.userId).fillFromDB();
            const avatar = await new Avatar(profile.id).fillFromDB();
            await avatar.set(this.req.body).save();
            this.res.json(avatar.toJSON());
        } catch (e) {
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
        }
    }

    async listWithoutSelf() {
        try {
            const profile = await new Profile(this.req.user.userId).fillFromDB();
            const list = await profile.listWithoutSelf();
            this.res.json(list);
        } catch (e) {
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
        }
    }
}

module.exports = ProfileModule
