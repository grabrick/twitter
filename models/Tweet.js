const {Schema, model} = require('mongoose')

const schema = Schema({
    id: {type: Number},
    avatar: {type: String},
    image: {type: String},
    name: {type: String},
    text: {type: String}
})

module.exports = model('Tweet', schema)