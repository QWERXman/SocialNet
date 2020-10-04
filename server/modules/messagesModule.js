const BaseModule = require("./base");
const Profile = require("../classes/Profile");
const Dialog = require("../classes/Dialog");
const Message = require("../classes/Message");
const getIO = require('../helpers/common')
const Session = require('../models/Session')

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

    async dialogMessages() {
        try {
            const messages = await Message.getDialogMessages(this.req.query.id)

            this.res.json(messages);
        } catch (e) {
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
        }
    }

    async create() {
        try {
            const receiverId = this.req.body.profileId;
            const text = this.req.body.text;
            const myProfile = await new Profile(this.req.user.userId).fillFromDB();
            const message = (await new Message(myProfile.id).create(receiverId, text)).toObject();

            message.receiver = await Profile.findById(receiverId);

            const io = getIO(this.req);
            const receiverSession = (await Session.findOne({ profileId: receiverId }));

            if (!receiverSession) {
                this.res.json(message);
                return;
            }

            const receiverSessionId = receiverSession.sessionId;
            io.sockets.sockets[receiverSessionId] && io.sockets.sockets[receiverSessionId].emit('NewMessage', message);
            this.res.json(message);
        } catch (e) {
            this.res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова', e })
        }
    }
}

module.exports = MessagesModule
