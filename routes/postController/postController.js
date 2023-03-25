const Tweet = require('../../models/Tweet')

class postController {
    async post(req, res) {
        try {
            // const candidate = await Profile.findOne({ name })
            const candidate = await Tweet.find({  })
            res.json({candidate})
        } catch (e) {
            res.json({message: 'error'})
        }   
    }

    async addPost(req, res) {
        const errors = validationResult(req)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Введите сообщение'
                })
            }

        const { id, name, avatar, text  } = req.body

        const post = new Tweet({id, name, avatar, text})

        await post.save()

        res.status(201).json({ message: 'Пост создан' })
    }
}


module.exports = new postController