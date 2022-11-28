const {Schema, model} = require('mongoose')

const schema = Schema({
    name: {type: String, required: true,},
    job: {type: String, required: true,},
    location: {type: String, required: true,},
    hbInfo: {type: String, required: true,},
    following: {type: String, required: true,},
    followers: {type: String, required: true,}
})

module.exports = model('Profile', schema)