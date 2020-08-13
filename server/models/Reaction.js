const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    reaction: {type: String, required: true},
    profileId: { type: Types.ObjectId, ref: 'Profile', required: true },
    postId: { type: Types.ObjectId, ref: 'Post', required: true }
})

module.exports = model('Reaction', schema)
