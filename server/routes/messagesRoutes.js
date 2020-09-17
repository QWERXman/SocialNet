const {check} = require('express-validator')
const { Router } = require('express')
const { authMiddleware } = require('../middleware/authMiddleware')
const MessagesProxy = require('../proxy/messagesProxy')
const router = Router()

// /api/messages/dialogsList
router.get('/dialogsList', [
        authMiddleware,
    ],
    MessagesProxy.dialogsList
)

// /api/messages/dialogMessages
router.get('/dialogMessages', [
        authMiddleware,
    ],
    MessagesProxy.dialogMessages
)

router.post('/sendMessage', [
        authMiddleware,
    ],
    MessagesProxy.sendMessage
)

module.exports = router;
