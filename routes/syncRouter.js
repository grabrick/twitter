const {Router} = require('express')
const router = Router()
const controller = require('./syncController/syncController')

router.get(
    '/profile',
    
    controller.sync
)

module.exports = router