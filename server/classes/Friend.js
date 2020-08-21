const ProfileModule = require('../modules/ProfileModule')
const ObjectId = require("Mongoose").Types.ObjectId;
const FriendModel = require('../models/Friend')


class Friend {
    constructor(profileId) {
        this.profileId = profileId;
    }

    async add(profileToAdd) {
        const friend = new FriendModel({profileFrom: this.profileId, profileTo: profileToAdd});
        return await friend.save();
    }

    async friends() {
        const friendsAggregate = await Friend.collection.aggregate([
            {$match: {
                    $or: [
                        {profileTo: ObjectId(this.profileId)},
                        {profileFrom: ObjectId(this.profileId)}
                    ]
                }
            },
            {$lookup:
                    {
                        from: "profileavatars",
                        localField: "profileFrom",
                        foreignField: "profileId",
                        as: "avatar"
                    }
            },
            {$lookup:
                    {
                        from: "profiles",
                        localField: "profileFrom",
                        foreignField: "_id",
                        as: "profile"
                    }
            },
        ]);

        const friends = (await friendsAggregate.toArray()).map(friend => {
            return {
                ...friend,
                ...friend.profile[0],
                avatar: friend.avatar[0],
            };
        });

        return friends;
    }

    async listIncomingRequests() {
        const aggregate = await FriendModel.collection.aggregate([
            {$match: {profileTo: ObjectId(this.profileId)}},
            {$lookup:
                    {
                        from: "profiles",
                        localField: "profileFrom",
                        foreignField: "_id",
                        as: "profile"
                    }
            },
            {$lookup:
                    {
                        from: "profileavatars",
                        localField: "profileFrom",
                        foreignField: "profileId",
                        as: "avatar"
                    }
            },
        ]);

        const friendRequests = (await aggregate.toArray()).map(friend => {
            return {
                ...friend,
                ...friend.profile[0],
                avatar: friend.avatar[0],
            };
        });

        return friendRequests;
    }

    async listOutgoingRequests() {
        const friendsAggregate = await FriendModel.collection.aggregate([
            {$match: {profileFrom: ObjectId(this.profileId)}},
            {$lookup: {
                    from: "profileavatars",
                    localField: "profileTo",
                    foreignField: "profileId",
                    as: "avatar"
                }
            },
            {$lookup: {
                    from: "profiles",
                    localField: "profileTo",
                    foreignField: "_id",
                    as: "profile"
                }
            },
        ]);

        const outgoingRequests = (await friendsAggregate.toArray()).map(friend => {
            return {
                ...friend,
                ...friend.profile[0],
                avatar: friend.avatar[0],
            };
        });

        return outgoingRequests;
    }
}

module.exports = Friend
