const {Router} = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')

const router = Router()

// /api/auth/register
router.post(
    '/register', 
    [
        check('email', 'некорректный email').isEmail(),
        check('password', 'минимальная длина пароля 6 символов')
            .isLength({min: 6})

    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'некорректные данные'
            })
        }

        const {email, password} = req.body

        const candidate = await User.findOne({email})

        if(candidate) {
           return res.status(400).json({message: 'такой пользователь уже есть'})
        }
        const hasedpass = await bcrypt.hash(password, 12);
        const user = new User({email, password: hasedpass})

        await user.save()

        res.status(201).json({message: 'пользователь создан'})

    } catch(e) {
        res.status(500).json({message: 'error????'})
    }
})

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'введите коректный email').normalizeEmail().isEmail(),
        check('password', 'введите пароль').exists()
    ], 
    async (req, res) => {
        try {
            const errors = validationResult(req)
    
            if(!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'некорректные данные при входе в систему'
                })
            }
    
            const {email, paasword} = req.body

            const user = await User.findOne({email})

            if(!user) {
                return res.status(400).json({message: 'пользователь не найден'})
            }

            const isMatch = await bcrypt.compare(paasword, user.paasword)

            if(!isMatch) {
                return res.status(500).json({message: 'неверный пароль'})
            }

            const token = jwt.sign(
                { userId: user.id  },
                config.get('jwtSecret'),
                {expiresIn: '1h'} // обязательное правило
            )

            res.json({token, userId: user.id})
    
        } catch(e) {
            res.status(500).json({message: 'error????'})
        }
})

module.exports = router