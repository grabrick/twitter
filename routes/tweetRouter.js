const {Router} = require('express')
const router = Router()
const controller = require('./tweetController/tweetController')

router.get(
    '/Tweet',
    
    controller.tweet
)

module.exports = router