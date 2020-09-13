const MessagesModule = require('../modules/messagesModule');

const dialogsList = (req, res) => (new MessagesModule(req, res)).dialogsList();

module.exports = {
    dialogsList
}
