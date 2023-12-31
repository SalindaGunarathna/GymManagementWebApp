
const jwt  = require('jsonwebtoken');

const Admin = require('../models/admin')

const auth = async (req,res,next) => {
    try {
        const token = req.header('Authorization').replace("Bearer ","")
        const decode = jwt.verify(token,"mysecret")

        const admin = await Admin.findOne({
            _id :decode._id,
            "tokens.token": token,
        })

        if (!admin) {
            throw new Error()
        }

        req.token = token;

        req.admin = admin;
        next();

    } catch (error) {
        res.status(401).send({error:"pleace Autho"});
        
    }

}


module.exports = auth;