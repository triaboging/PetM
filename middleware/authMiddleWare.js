const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
       return next()
    }

    try {
        console.log('ccccccccccv')
        const token = req.headers.authorization.split(' ')[1]
        console.log('token', token)
        if (!token) {
            return res.status(401).json({message: 'Auth error'})
        }
        console.log(token)
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded
        next()
    } catch (e) {
        return res.status(401).json({message: 'Auth error херня'})
    }
}