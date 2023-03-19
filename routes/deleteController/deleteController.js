const Tweet = require('../../models/Tweet')

class deleteController {
    async delete(req, res) {
        try {
            const {id} = req.params
    
            if(!id) {
                return res.status(400).json({message: "ID not found"})
            }
    
            // const findId = await Tweet.findById(id)
            const deleteElement = await Tweet.findByIdAndDelete(id)
            return res.json(deleteElement)
        } catch (e) {
            res.status(500).json(e)
        }   
    }
}


module.exports = new deleteController