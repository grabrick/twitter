const {Schema, model} = require('mongoose')

const schema = Schema({
    avatar: {type: String},
    image: {type: String},
    name: {type: String},
    text: {type: String}
})

module.exports = model('Tweet', schema)