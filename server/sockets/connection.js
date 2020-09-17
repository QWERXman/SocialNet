const Profile = require("../classes/Profile");
const addListeners = require("./addListeners");

function connection(io) {
    io.on("connection", async (socket) => {
        const myProfile = await new Profile(socket.user.userId).fillFromDB();
        console.log("New client connected " + myProfile.model.name);

        socket.emit("FromAPI", myProfile.model.name);

        socket.on("disconnect", () => {
            console.log("Client disconnected " + myProfile.model.name);
        });

        addListeners(socket, io)
    });


}

module.exports = connection;
