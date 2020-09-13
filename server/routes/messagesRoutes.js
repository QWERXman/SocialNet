const {check} = require('express-validator')
const { Router } = require('express')
const { authMiddleware } = require('../middleware/authMiddleware')
const PostProxy = require('../proxy/postProxy')
const router = Router()

// /api/messages/dialogsList
router.post('/dialogsList', [
        authMiddleware,
    ],
    PostProxy.create
)

module.exports = router;
