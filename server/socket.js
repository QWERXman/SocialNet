const jwt = require("jsonwebtoken");
const Profile = require("./classes/Profile");
const Session = require("./models/Session");
const socketIo = require("socket.io");
const config = require('config')
const connection = require("./sockets/connection");

function socketConfiguration(server) {
    const io = socketIo(server);

    io.use(async function(socket, next) {
        const handshake = socket.handshake;
        const sessionId = socket.id;
        const token = handshake.query.token;
        if (!token) {
            return next(null, true);
        }

        const user = jwt.verify(token, config.get('jwtSecret'));
        const myProfile = await new Profile(user.userId).fillFromDB();
        const session = new Session({ sessionId, userId: user.userId, profileId: myProfile.id });
        await session.save();

        socket.user = session;
        next();
    });

    connection(io);
}

module.exports = socketConfiguration
