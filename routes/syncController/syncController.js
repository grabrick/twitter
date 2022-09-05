const Profile = require('../../models/Profile')

class syncController {
    async sync(req, res) {
        try {
            // res.json({message: "bbbbgbgb"})
            const { name } = req.body
        } catch (e) {
            res.json({message: 'error'})
        }   
    }
}


module.exports = new syncController