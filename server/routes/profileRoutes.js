const {check} = require('express-validator')
const { Router } = require('express')
const { authMiddleware } = require('../middleware/authMiddleware')
const ProfileModel = require('../models/Profile')
const Profile = require('../classes/Profile')
const ProfileAvatar = require("../models/ProfileAvatar");
const {jsonParser} = require("config");
const ProfileProxy = require('../proxy/profile')
const router = Router()

// /api/profile/self
router.get('/self', authMiddleware, ProfileProxy.getMyProfile);

// /api/profile/self
router.post('/self', [
        authMiddleware,
        check('name', 'Введите имя').exists(),
        check('email', 'Некорректный email').isEmail(),
    ], ProfileProxy.setMyProfile)

// /api/profile/
router.post('/self/editAvatar', [
    authMiddleware
], async (req, res) => {
    try {
        const profile = await ProfileModel.findOne({ userId: req.user.userId });
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
