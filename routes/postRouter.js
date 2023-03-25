const {Router} = require('express')
const router = Router()
const controller = require('./postController/postController')
const {check} = require('express-validator')

router.get(
    '/posts',
    controller.post
),

router.post(
    '/add/post',
    [
        check('text', 'Введите сообщение').isEmpty().isLength({min: 10, max: 1200})
    ],
    controller.addPost
)

module.exports = router