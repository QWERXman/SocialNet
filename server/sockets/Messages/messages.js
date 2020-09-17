const Message = require('../../classes/Message')
const Session = require('../../models/Session')

function messagesListener(socket, io) {
    socket.on('SendMessage', async (data) => {
        const message = await new Message(socket.user.profileId).create(data.to, data.text);
        socket.emit('NewMessage', message);
        const receiverSession = await Session.findOne({ profileId:data.to });
        io.sockets.sockets[receiverSession.sessionId].emit('NewMessage', message);
    })
}

module.exports = messagesListener;
