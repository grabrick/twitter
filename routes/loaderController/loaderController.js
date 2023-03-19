const Tweet = require('../../models/Tweet')

class loaderController {
    async loader(req, res) {
        try {
            const find = await Tweet.find()
            return res.json(find)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}


module.exports = new loaderController