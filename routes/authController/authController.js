const secret = require('../../config/secret')
const {validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const User = require('../../models/User')

class authController {

    async register(req, res) {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные'
                })
            }

            const { email, password } = req.body


            const candidate = await User.findOne({ email })
            if (candidate) {
                return res.status(400).json({ message: 'Такой пользователь уже есть' })
            }


            const hasedpass = await bcrypt.hash(password, 4);
            const user = new User({ email, password: hasedpass})

            await user.save()

            res.status(201).json({ message: 'Пользователь создан' })
        } catch (e) {
            res.status(500).json({message: 'error????'})
        }
    }

    async login(req, res) {
        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные'
                })
            }

            const {email, password} = req.body

            const user = await User.findOne({ email })
            if(!user) {
                return res.status(400).json({message: 'Пользователь не найден'})
            }

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) {
                res.status(400).json({message: 'Неверный пароль'})
            }

        } catch (e) {
            res.status(500).json({message: 'f'})
        }
    }

}

module.exports = new authController()