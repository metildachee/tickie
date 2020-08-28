const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    // next means continue the code
    // everytime user sends a request, I want the token back
    // but I dont want him to do send it in the URL, I want him to hide it in the header
    // to do that, we need to store it 
    const token = req.header("x-auth-token") // will lie within the app
    // it's not as easy to see
    if (!token) {
        // must be 401 (unauthorised to view this)
        return res.status(401).json({ msg: "You are unauthorised." })
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET)

        req.user = decoded.user // .user => this is the payload

        next()
    } catch (error) {
        return res.status(401).json({ msg: "Token not valid." })
    }
}