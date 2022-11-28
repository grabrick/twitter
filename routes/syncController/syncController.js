// const Profile = require('../../models/Profile')
const User = require('../../models/User')

class syncController {
    async sync(req, res) {
        try {
            // const { email, name,  } = req.body

            // const candidate = await Profile.findOne({ name })
            
            const candidate = await User.find({})

            res.json({candidate})
        } catch (e) {
            res.json({message: 'error'})
        }   
    }
}


module.exports = new syncController