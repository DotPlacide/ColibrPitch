require('dotenv').config();
const jwt  = require('jsonwebtoken');

const authCompany = (req , res , next) =>{
    const token = req.header('authcompany-token');
    if(!token) {
        return res.status(401).json({msg:'no token , no access denied'})
    }
    try {
        const decoded = jwt.verify(token , process.env.SECRET);
        req.company = decoded.company;
        next()
    }
    catch (e) {
        res.status(401).json({msg:'invalid token'})
    }
};

module.exports = authCompany;