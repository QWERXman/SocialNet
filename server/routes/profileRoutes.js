const {check} = require('express-validator')
const { Router } = require('express')
const { authMiddleware } = require('../middleware/authMiddleware')
const ProfileProxy = require('../proxy/profileProxy')
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
], ProfileProxy.editAvatar)


module.exports = router;
