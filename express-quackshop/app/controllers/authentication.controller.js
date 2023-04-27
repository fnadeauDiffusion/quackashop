const {User} = require('../models')

module.exports = {
    async register (req, res) {
        try {
            res.send('i hate this potato head')
        }
        catch (err) {
            res.status(400).send({
                error: 'the error'
            })
        }
    }    
}