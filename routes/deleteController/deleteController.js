const Tweet = require('../../models/Tweet')

class deleteController {
    async delete(req, res) {
        try {
            const {id} = req.params
    
            if(!id) {
                return res.status(400).json({message: "ID not found"})
            }
    
            const dl = await Tweet.findOneAndDelete(id)
            return res.json(dl)
        } catch (e) {
            res.status(500).json(e)
        }   
    }
}


module.exports = new deleteController