const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    sessionId: { type: String, required: true },
    profileId: { type: Types.ObjectId, ref: 'Profile', required: true },
    userId: { type: Types.ObjectId, ref: 'User', required: true }
})

module.exports = model('Session', schema)
