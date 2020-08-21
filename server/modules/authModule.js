const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const Profile = require('../classes/Profile')
const Avatar = require('../classes/Avatar')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const BaseModule = require("./base");

class AuthModule extends BaseModule {
    async register() {
        try {
            const errors = validationResult(this.req)

            if (!errors.isEmpty()) {
                return this.res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректный данные при регистрации'
                })
            }

            const {username, password} = this.req.body

            const candidate = await User.findOne({ username })

            if (candidate) {
                return this.res.status(400).json({ message: 'Такой пользователь уже существует' })
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({ username, password: hashedPassword })

            await user.save()
            const profile = await Profile.create({ name: username, userId: user.id, email: `${username}@ya.com`});
            const avatar = await Avatar.create(profile.id)

            this.res.status(201).json({ message: 'Пользователь создан' })

        } catch (e) {
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
        }
    }

    async login() {
        try {
            const errors = validationResult(this.req)

            if (!errors.isEmpty()) {
                return this.res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректный данные при входе в систему'
                })
            }

            const {username, password} = this.req.body

            const user = await User.findOne({ username })

            if (!user) {
                return this.res.status(400).json({ message: 'Пользователь не найден' })
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return this.res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )

            return this.res.json({ token, userId: user.id })

        } catch (e) {
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    }
}

module.exports = AuthModule;
