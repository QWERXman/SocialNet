const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    dialog: { type: Types.ObjectId, ref: 'Dialog', required: true },
    sender: { type: Types.ObjectId, ref: 'Profile', required: true },
    receiver: { type: Types.ObjectId, ref: 'Profile', required: true },
    text: { type: String, required: true },
    date: { type: Date, required: true }
});

module.exports = model('Message', schema)
