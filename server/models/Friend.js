const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    profileFrom: { type: Types.ObjectId, ref: 'Profile', required: true },
    profileTo: { type: Types.ObjectId, ref: 'Profile', required: true },
})

module.exports = model('Friend', schema)
