const MessagesModel = require('../models/Message')
const Dialog = require("./Dialog");


class Message {
    constructor(profileId) {
        this.profileId = profileId;
    }

    async create(receiver, text) {
        const dialog = await (new Dialog(this.profileId).create(receiver, text));
        const message = await (new MessagesModel({
            receiver,
            text,
            sender: this.profileId,
            dialog: dialog.id,
            date: new Date()
        })).save();

        return message
    }

    static async getDialogMessages(dialogId) {
        const messages = await MessagesModel.find({dialog: dialogId}).sort({date: -1});
        return messages
    }

}

module.exports = Message
