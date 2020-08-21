const BaseModule = require("./base");
const Profile = require("../classes/Profile");
const Friend = require("../classes/Friend");

class FriendsModule extends BaseModule {
    async add() {
        try {
            const myProfile = await new Profile(this.req.user.userId).fillFromDB();
            const profileToAdd = this.req.body.profileId;
            const friendLink = await new Friend(myProfile.id).add(profileToAdd);
            this.res.json(friendLink);
        } catch (e) {
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
        }
    }

    async findFriendsList() {
        try {
            const myProfile = await new Profile(this.req.user.userId).fillFromDB();
            const allProfiles = await myProfile.listWithoutSelf();
            const outgoingRequests = await new Friend(myProfile.id).listOutgoingRequests();
            const incomingRequests = await new Friend(myProfile.id).listIncomingRequests();
            const outgoingIds = outgoingRequests.map(
                outgoing => outgoing.profileTo.toString());
            const incomingIds = incomingRequests.map(
                incoming => incoming.profileFrom.toString());

            const profilesToAdd = allProfiles.filter(
                profile => !(
                    outgoingIds.includes(profile._id.toString())
                    || incomingIds.includes(profile._id.toString())
                )
            )

            this.res.json(profilesToAdd);
        } catch (e) {
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
        }
    }

    async myFriends() {
        try {
            const myProfile = await new Profile(this.req.user.userId).fillFromDB();
            const outgoingRequests = await new Friend(myProfile.id).listOutgoingRequests();
            const incomingRequests = await new Friend(myProfile.id).listIncomingRequests();

            const outgoingIds = outgoingRequests.map(
                outgoing => outgoing.profileTo.toString());

            const friends = incomingRequests.filter(
                incoming => outgoingIds.includes(incoming.profileFrom.toString()));

            this.res.json(friends);
        } catch (e) {
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
        }
    }

    async listIncomingRequests() {
        try {
            const myProfile = await new Profile(this.req.user.userId).fillFromDB();
            const outgoingRequests = await new Friend(myProfile.id).listOutgoingRequests();
            let incomingRequests = await new Friend(myProfile.id).listIncomingRequests();

            const outgoingIds = outgoingRequests.map(
                outgoing => outgoing.profileTo.toString());

            incomingRequests = incomingRequests.filter(
                incoming => !outgoingIds.includes(incoming.profileFrom.toString()));

            this.res.json(incomingRequests);

        } catch (e) {
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
        }
    }

    async listOutgoingRequests() {
        try {
            const myProfile = await new Profile(this.req.user.userId).fillFromDB();
            const incomingRequests = await new Friend(myProfile.id).listIncomingRequests();
            let outgoingRequests = await new Friend(myProfile.id).listOutgoingRequests();

            const incomingIds = incomingRequests.map(
                incoming => incoming.profileFrom.toString());

            outgoingRequests = outgoingRequests.filter(
                outgoing => !incomingIds.includes(outgoing.profileTo.toString()));

            this.res.json(outgoingRequests);
        } catch (e) {
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e });
        }
    }
}

module.exports = FriendsModule
