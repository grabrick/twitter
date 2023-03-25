const {Schema, model} = require('mongoose')

const schema = Schema({
    name: {type: String, required: true},
    bio: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    photo: {type: String},
    backImage: {type: String},
    job: {type: String},
    location: {type: String},
    hbInfo: {type: String},
    following: {type: Number},
    followers: {type: Number},
})

module.exports = model('User', schema)