const FriendsModule = require('../modules/friendsModule');

const add = (req, res) => (new FriendsModule(req, res)).add();
const listOutgoingRequests = (req, res) => (new FriendsModule(req, res)).listOutgoingRequests();
const listIncomingRequests = (req, res) => (new FriendsModule(req, res)).listIncomingRequests();
const myFriends = (req, res) => (new FriendsModule(req, res)).myFriends();
const findFriendsList = (req, res) => (new FriendsModule(req, res)).findFriendsList();

module.exports = {
    add,
    listOutgoingRequests,
    listIncomingRequests,
    myFriends,
    findFriendsList,
}
