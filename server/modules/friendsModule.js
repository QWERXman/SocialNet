const BaseModule = require("./base");
const Profile = require("../classes/Profile");
const Friend = require("../classes/Friend");

class FriendsModule extends BaseModule {
    async add(profileToAdd) {
        try {
            const myProfile = await new Profile(this.req.user.userId).fillFromDB();
            const friendLink = await new Friend(myProfile.id).add(profileToAdd);
            this.res.json(friendLink);
        } catch (e) {
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
        }
    }

    async myFriends() {
        try {
            const myProfile = await new Profile(this.req.user.userId).fillFromDB();
            const friends = await new Friend(myProfile.id).friends();
            this.res.json(friends);

        } catch (e) {
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
        }
    }

    async listIncomingRequests() {
        try {
            const myProfile = await new Profile(this.req.user.userId).fillFromDB();
            const incomingRequests = await new Friend(myProfile.id).listIncomingRequests()

            this.res.json(incomingRequests);

        } catch (e) {
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
        }
    }

    async listOutgoingRequests() {
        try {
            const myProfile = await new Profile(this.req.user.userId).fillFromDB();
            const outgoingRequests = await new Friend(myProfile.id).listOutgoingRequests();

            this.res.json(outgoingRequests);
        } catch (e) {
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
        }
    }
}

module.exports = FriendsModule
