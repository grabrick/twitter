const {Router} = require('express')
const router = Router()
const controller = require('./loaderController/loaderController')

router.get(
    '/all',
    
    controller.loader
)

module.exports = router