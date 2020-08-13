const {check} = require('express-validator')
const { Router } = require('express')
const { authMiddleware } = require('../middleware/authMiddleware')
const Post = require('../models/Post')
const Profile = require('../models/Profile')
const Avatar = require('../models/ProfileAvatar')
const ObjectId = require("Mongoose").Types.ObjectId;
const router = Router()

// /api/post/create
router.post('/create', [
    authMiddleware,
    check('text', 'Нет текста').exists(),
    check('title', 'Нет заголовка').exists(),
    ], async (req, res) => {
    try {
        const profile = await Profile.findOne({ userId: req.user.userId });
        const post = new Post({
            profileId: profile.id,
            text: req.body.text,
            title: req.body.title,
            date: new Date(),
        })

        await post.save();
        res.json(post);

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
    }
})

// /api/post/self
router.get('/list', [
    authMiddleware,
], async (req, res) => {
    try {
        const filter = {};
        if (req.query.profileId) {
            filter.profileId = ObjectId(req.query.profileId);
        }

        const postsAggregate = await Post.collection.aggregate([
            {$match: filter },
            {$lookup:
                {
                    from: "profileavatars",
                    localField: "profileId",
                    foreignField: "profileId",
                    as: "avatar"
                }
            },
            {$lookup:
                {
                    from: "profiles",
                    localField: "profileId",
                    foreignField: "_id",
                    as: "profile"
                }
            },
            {$sort : {date: -1}},
        ])
        const posts = (await postsAggregate.toArray()).map(post => {
            post.avatar = post.avatar[0];
            post.profile = post.profile[0];
            return post;
        });
        res.json(posts);

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
    }
})



module.exports = router;
