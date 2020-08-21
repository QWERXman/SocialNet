const {check} = require('express-validator')
const { Router } = require('express')
const { authMiddleware } = require('../middleware/authMiddleware')
const PostProxy = require('../proxy/postProxy')
const router = Router()

// /api/post/create
router.post('/create', [
        authMiddleware,
        check('text', 'Нет текста').exists(),
        check('title', 'Нет заголовка').exists(),
    ],
    PostProxy.create
)

// /api/post/self
router.get('/list', [
        authMiddleware,
    ],
    PostProxy.list
)


module.exports = router;
