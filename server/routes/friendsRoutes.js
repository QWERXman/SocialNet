const {check} = require('express-validator')
const { Router } = require('express')
const { authMiddleware } = require('../middleware/authMiddleware')
const Post = require('../models/Post')
const Profile = require('../models/Profile')
const Avatar = require('../models/ProfileAvatar')
const Friend = require('../models/Friend')
const ObjectId = require("Mongoose").Types.ObjectId;
const router = Router()

// /api/friends/all_users
router.get('/all_users', [
    authMiddleware,
], async (req, res) => {
    try {
    const usersAggregate = await Profile.collection.aggregate([
        {$match: {userId: {$ne: ObjectId(req.user.userId)}} },
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

    const users = (await usersAggregate.toArray()).map((user) => {
        user.avatar = user.avatar[0];
        return user;
    });

    res.json(users);

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
    }
})

// /api/friends/add_friend
router.post('/add_friend', [
    authMiddleware,
    check('profileId', 'Нет id друга').exists(),
], async (req, res) => {
    try {
        const profileFrom = await Profile.findOne({userId: req.user.userId});

        const friend = new Friend({profileFrom: profileFrom.id, profileTo: req.body.profileId});
        await friend.save();

        res.json(friend);

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
    }
})

// /api/friends/outgoing_requests
router.get('/outgoing_requests', [
    authMiddleware,
], async (req, res) => {
    try {
        const profile = await Profile.findOne({userId: req.user.userId})
        const friendsAggregate = await Friend.collection.aggregate([
            {$match: {profileFrom: ObjectId(profile.id)}},
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

        const friends = (await friendsAggregate.toArray()).map(friend => {
            return {
            ...friend,
            ...friend.profile[0],
            avatar: friend.avatar[0],
            };
        });

        res.json(friends);

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
    }
})

// /api/friends/incoming_requests
router.get('/incoming_requests', [
    authMiddleware,
], async (req, res) => {
    try {
        const profile = await Profile.findOne({userId: req.user.userId})
        const friendsAggregate = await Friend.collection.aggregate([
            {$match: {profileTo: ObjectId(profile.id)}},
            // {$lookup:
            //         {
            //             from: "profiles",
            //             localField: "profileFrom",
            //             foreignField: "_id",
            //             as: "profile"
            //         }
            // },
            {$lookup:
                    {
                        from: "profiles",
                        pipeline: [
                            {$match: {}}
                        ],
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

        const friends = (await friendsAggregate.toArray()).map(friend => {
            return {
                ...friend,
                ...friend.profile[0],
                avatar: friend.avatar[0],
            };
        });

        res.json(friends);

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
    }
})

// /api/friends/my_friends
router.get('/my_friends', [
    authMiddleware,
], async (req, res) => {
    try {
        const profile = await Profile.findOne({userId: req.user.userId})
        const friendsAggregate = await Friend.collection.aggregate([
            {$match: {
                    $and: [
                        {profileTo: ObjectId(profile.id)},
                        {profileFrom: ObjectId(profile.id)}
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

        res.json(friends);

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
    }
})

module.exports = router;
