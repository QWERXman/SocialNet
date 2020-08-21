const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const Profile = require('../models/Profile')
const Avatar = require('../models/ProfileAvatar')
const AuthProxy = require("../proxy/authProxy");
const router = Router()


// /api/auth/register
router.post(
    '/register',
    [
        check('username', 'Некорректный username').exists(),
        check('password', 'Минимальная длина пароля 6 символов')
            .isLength({ min: 6 })
    ],
    AuthProxy.register
)

// /api/auth/login
router.post(
    '/login',
    [
        check('username', 'Введите корректный username').exists(),
        check('password', 'Введите пароль').exists()
    ],
    AuthProxy.login
)

module.exports = router
