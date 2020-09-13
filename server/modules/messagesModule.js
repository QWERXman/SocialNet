const BaseModule = require("./base");
const Profile = require("../classes/Profile");
const Dialog = require("../classes/Dialog");
const Message = require("../classes/Message");

class MessagesModule extends BaseModule {
    async dialogsList() {
        try {
            const myProfile = await new Profile(this.req.user.userId).fillFromDB();
            const dialogs = await new Dialog(myProfile.id).myDialogs();

            this.res.json(dialogs);
        } catch (e) {
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
        }
    }

    async create() {
        try {
            const myProfile = await new Profile(this.req.user.userId).fillFromDB();
            const message = await new Message(myProfile.id).create(this.req.receiverId, this.req.text);

            this.res.json(message);
        } catch (e) {
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
        }
    }
}

module.exports = MessagesModule
