require('dotenv').config();
const jwt  = require('jsonwebtoken');

const authWork = (req , res , next) =>{
    const token = req.header('authworker-token');
    if(!token) {
        return res.status(401).json({msg:'no token , no access denied'})
    }
    try {
        const decoded = jwt.verify(token , process.env.SECRET);
        req.worker = decoded.worker;
        next()
    }
    catch (e) {
        res.status(401).json({msg:'invalid token'})
    }
};

module.exports = authWork;