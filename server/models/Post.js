const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: true},
    text: {type: String, required: true},
    date:  {type: Date},
    profileId: { type: Types.ObjectId, ref: 'Profile', required: true }
})

module.exports = model('Post', schema)
