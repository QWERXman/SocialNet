const {check} = require('express-validator')
const { Router } = require('express')
const { authMiddleware } = require('../middleware/authMiddleware')
const Profile = require('../models/Profile')
const ProfileAvatar = require("../models/ProfileAvatar");
const {jsonParser} = require("config");
const router = Router()

// /api/profile/
router.get('/self', authMiddleware, async (req, res) => {
    try {
        const profile = await Profile.findOne({ userId: req.user.userId });
        const avatar = await ProfileAvatar.findOne({ profileId: profile.id });

        res.json({...profile.toJSON(), avatar: avatar})
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
    }
})

// /api/profile/
router.post('/self', [
    authMiddleware,
    check('name', 'Введите имя').exists(),
    check('email', 'Некорректный email').isEmail(),
    ], async (req, res) => {
    try {
        let profile = await Profile.findOne({ userId: req.user.userId });

        profile.name = req.body.name;
        profile.secondName = req.body.secondName;
        profile.status = req.body.status;
        profile.birthday = req.body.birthday;
        profile.city = req.body.city;
        profile.email = req.body.email;

        await profile.save();
        res.json(profile);
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
    }
})

// /api/profile/
router.post('/self/editAvatar', [
    authMiddleware
], async (req, res) => {
    try {
        const profile = await Profile.findOne({ userId: req.user.userId });
        let avatar = await ProfileAvatar.findOne({ profileId: profile.id });

        if (!avatar) {
            avatar = new ProfileAvatar({ profileId: profile.id})
        }

        const fields = Object.keys(req.body);
        fields.forEach((field) => {
            avatar[field] = req.body[field];
        })

        await avatar.save();
        res.json(avatar);
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
    }
})


module.exports = router;
