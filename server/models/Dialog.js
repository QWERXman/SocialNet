const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    sender: { type: Types.ObjectId, ref: 'Profile', required: true },
    receiver: { type: Types.ObjectId, ref: 'Profile', required: true },
    text: { type: String },
    date: { type: Date }
});

module.exports = model('Dialog', schema)
