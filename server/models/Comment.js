const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    text: {type: String, required: true},
    date:  {type: Date},
    profileId: { type: Types.ObjectId, ref: 'Profile', required: true },
    postId: { type: Types.ObjectId, ref: 'Post', required: true }
})

module.exports = model('Reaction', schema)
