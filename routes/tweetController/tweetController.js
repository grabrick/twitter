const Tweet = require('../../models/Tweet')

class tweetController {
    async tweet(req, res) {
        try {
            // const candidate = await Profile.findOne({ name })
            
            const candidate = await Tweet.find({  })
            res.json({candidate})
        } catch (e) {
            res.json({message: 'error'})
        }   
    }
}


module.exports = new tweetController