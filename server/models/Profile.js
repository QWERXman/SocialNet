const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name: {type: String, required: true},
    secondName: {type: String},
    email: {type: String, unique: true},
    avatar: {type: String},
    status: {type: String},
    birthday: {type: Date},
    city: {type: String},
    userId: { type: Types.ObjectId, ref: 'User', required: true }
})

module.exports = model('Profile', schema)
