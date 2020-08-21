const FriendsModule = require('../modules/friendsModule');

const add = (req, res) => (new FriendsModule(req, res)).add();
const listOutgoingRequests = (req, res) => (new FriendsModule(req, res)).listOutgoingRequests();
const listIncomingRequests = (req, res) => (new FriendsModule(req, res)).listIncomingRequests();
const myFriends = (req, res) => (new FriendsModule(req, res)).myFriends();

module.exports = {
    add,
    listOutgoingRequests,
    listIncomingRequests,
    myFriends,
}
