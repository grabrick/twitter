const {Router} = require('express')
const router = Router()
const controller = require('./authController/authController')
const {check} = require('express-validator')

router.post(
    '/register',
    [
        check('email', 'некорректный email').isEmail(),
        check('password', 'минимальная длина пароля 6 символов')
            .isLength({min: 6})
    ],
    controller.register
)

router.post(
    '/login',
    [
        check('email', 'введите коректный email').normalizeEmail().isEmail(),
        check('password', 'введите пароль').exists()
    ],
    controller.login
)


module.exports = router