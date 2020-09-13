const DialogModel = require('../models/Dialog')


class Dialog {
    constructor(profileId) {
        this.profileId = profileId;
    }

    async myDialogs() {
        return await DialogModel.find({$or: [{sender: this.profileId}, {receiver: this.profileId}]});
    }

    async create(receiverId, text) {
        let existedDialog = await DialogModel.find({
            $or: [
                {sender: this.profileId, receiver: receiverId},
                {receiver: this.profileId, sender: receiverId}
            ]
        });

        if (!existedDialog) {
            existedDialog = new DialogModel({sender: this.profileId, receiverId, text})
        }

        existedDialog.set({text})

        return existedDialog;
    }
}

module.exports = Dialog
