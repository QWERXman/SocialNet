const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    profileId: { type: Types.ObjectId, ref: 'Profile', required: true },

    accessory: {type: String},
    body: {type: String},
    clothing: {type: String},
    clothingColor: {type: String},
    eyebrows: {type: String},
    eyes: {type: String},
    facialHair: {type: String},
    graphic: {type: String},
    hair: {type: String},
    hairColor: {type: String},
    hat: {type: String},
    hatColor: {type: String},
    lashes: {type: Boolean},
    lipColor: {type: String},
    mask: {type: Boolean},
    mouth: {type: String},
    skinTone: {type: String},
});

module.exports = model('ProfileAvatar', schema)
