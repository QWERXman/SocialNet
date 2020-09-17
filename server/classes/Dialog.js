const DialogModel = require('../models/Dialog')


class Dialog {
    constructor(profileId) {
        this.profileId = profileId;
    }

    async myDialogs() {
        const dialogsAggregate = DialogModel.collection.aggregate([
            {$match:
                {$or: [{sender: this.profileId}, {receiver: this.profileId}]}
            },
            {$lookup:
                {
                    from: "profileavatars",
                    localField: "receiver",
                    foreignField: "profileId",
                    as: "receiverAvatar"
                }
            },
            {$lookup:
                {
                    from: "profiles",
                    localField: "receiver",
                    foreignField: "_id",
                    as: "receiverProfile"
                }
            },
            {$lookup:
                    {
                        from: "profileavatars",
                        localField: "sender",
                        foreignField: "profileId",
                        as: "senderAvatar"
                    }
            },
            {$lookup:
                    {
                        from: "profiles",
                        localField: "sender",
                        foreignField: "_id",
                        as: "senderProfile"
                    }
            },
            {$sort : {date: -1}}
        ])

        const dialogs = (await dialogsAggregate.toArray()).map(dialog => {
            const lastMessageFromMe = String(dialog.senderProfile[0]._id) === String(this.profileId);

            dialog.receiver = lastMessageFromMe ? dialog.receiverProfile[0] : dialog.senderProfile[0];
            dialog.receiver.avatar = lastMessageFromMe ? dialog.receiverAvatar[0] : dialog.senderAvatar[0];
            dialog.lastMessageFromMe = lastMessageFromMe

            delete dialog.receiverProfile;
            delete dialog.senderProfile;
            delete dialog.receiverAvatar;
            delete dialog.senderAvatar;

            return dialog;
        });

        return dialogs;
    }

    async create(receiver, text) {
        let existedDialog = await DialogModel.findOne({
            $or: [
                {sender: this.profileId, receiver: receiver},
                {receiver: this.profileId, sender: receiver}
            ]
        });

        if (!existedDialog) {
            existedDialog = new DialogModel({
                text,
                sender: this.profileId,
                receiver: receiver,
                date: new Date()
            });
        }

        existedDialog.text = text;
        existedDialog.sender = this.profileId;
        existedDialog.receiver = receiver;
        existedDialog.date = new Date();
        await existedDialog.save();

        return existedDialog;
    }
}

module.exports = Dialog
