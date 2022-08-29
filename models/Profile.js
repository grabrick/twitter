const {Schema, model} = require('mongoose')

const schema = Schema({
    name: {type: String, required: true,},
    photo: {type: Image, required: true,},
    backImage: {type: Image, required: true,},
    job: {type: String, required: true,},
    location: {type: String, required: true,},
    hbInfo: {type: String, required: true,},
    following: {type: String, required: true,},
    followers: {type: String, required: true,}
})

module.exports = model('Profile', schema)