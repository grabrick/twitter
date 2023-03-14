const {Router} = require('express')
const router = Router()
const controller = require('./deleteController/deleteController')

router.delete(
    '/post/delete/:id',
    
    controller.delete
)

module.exports = router