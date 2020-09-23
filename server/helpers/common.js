const getIO = function (req) {
    return req && req.socket && req.socket.server && req.socket.server.io;
}

module.exports = getIO;
