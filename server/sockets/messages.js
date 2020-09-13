function messagesListener(socket) {
    socket.on('RoomNewMessage', (socket) => {
        console.log(socket)
    })
}
