const Message = require('../../classes/Message')
const Session = require('../../models/Session')

function messagesListener(socket, io) {
    socket.on('SendMessage', async (data) => {
        const message = await new Message(socket.user.profileId).create(data.to, data.text);
        message.receiver._id = message.receiver
        socket.emit('NewMessage', message);
        const receiverSession = await Session.findOne({ profileId:data.to });
        if (!receiverSession || String(receiverSession.sessionId) === String(socket.id)) {
            return;
        }
        io.sockets.sockets[receiverSession.sessionId].emit('NewMessage', message);
    })
}

module.exports = messagesListener;
