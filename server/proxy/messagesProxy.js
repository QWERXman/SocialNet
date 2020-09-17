const MessagesModule = require('../modules/messagesModule');

const dialogsList = (req, res) => (new MessagesModule(req, res)).dialogsList();
const dialogMessages = (req, res) => (new MessagesModule(req, res)).dialogMessages();
const sendMessage = (req, res) => (new MessagesModule(req, res)).create();

module.exports = {
    dialogsList,
    dialogMessages,
    sendMessage,
}
