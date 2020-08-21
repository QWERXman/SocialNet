const {check} = require('express-validator')
const { Router } = require('express')
const { authMiddleware } = require('../middleware/authMiddleware')
const FriendsProxy = require('../proxy/friendsProxy')
const router = Router()

// /api/friends/all_users
router.get('/all_users', [
    authMiddleware,
], FriendsProxy.findFriendsList)

// /api/friends/add_friend
router.post('/add_friend', [
    authMiddleware,
    check('profileId', 'Нет id друга').exists(),
], FriendsProxy.add)

// /api/friends/outgoing_requests
router.get('/outgoing_requests', [
    authMiddleware,
], FriendsProxy.listOutgoingRequests)

// /api/friends/incoming_requests
router.get('/incoming_requests', [
    authMiddleware,
], FriendsProxy.listIncomingRequests)

// /api/friends/my_friends
router.get('/my_friends', [
    authMiddleware,
], FriendsProxy.myFriends)

module.exports = router;
