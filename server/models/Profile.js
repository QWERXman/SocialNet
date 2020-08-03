const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true},
    secondName: {type: String, required: true},
    userId: { type: Types.ObjectId, ref: 'User', required: true }
})

module.exports = model('User', schema)
