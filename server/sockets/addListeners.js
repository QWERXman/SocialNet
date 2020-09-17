const messagesListener = require("./Messages/messages");


function addListeners(socket, io) {
    messagesListener(socket, io)

    socket.on('asdasd', (asd) => {
        console.log('asdasdasdasdas')
    })
}

module.exports = addListeners;
