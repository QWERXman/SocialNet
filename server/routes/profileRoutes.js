const { Router } = require('express')
const { authMiddleware } = require('../middleware/authMiddleware')
const Profile = require('../models/Profile')
const router = Router()

// /api/profile/
router.get('/self', authMiddleware, async (req, res) => {
    try {
        const profile = await Profile.findOne({ userId: req.user.userId })
        res.json(profile)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

module.exports = router;
