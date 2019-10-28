const userModel = require('../database/models/user')
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    try {
        // const token = req.body.token || req.query.token || req.header('Authorization').replace('Bearer', '') 
        // const decoded = jwt.verify(token, 'awesomeversionthree')
        const user_id = req.body.user.user_id
        const user = await userModel.getUserProfile(user_id)

        if(!user) {
            throw new Error ('error auth')
        }
        req.user = user
        res.send({user: req.user})
    } catch(e) {
        res.status(403).send(e)
    }
}

module.exports = auth