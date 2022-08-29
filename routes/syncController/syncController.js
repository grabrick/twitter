const Profile = require('../../models/Profile')

class syncController {
    async sync(req, res) {
        try {
            
        } catch (e) {
            res.json({message: 'error'})
        }   
    }
}


module.exports = new syncController