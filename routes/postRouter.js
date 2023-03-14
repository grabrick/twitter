const {Router} = require('express')
const router = Router()
const controller = require('./postController/postController')

router.get(
    '/posts',
    
    controller.tweet
)

module.exports = router