const {Router} = require('express')
const router = Router()
const controller = require('./syncController/syncController')

router.get(
    '/',
    controller.sync
)