
const jwt  = require('jsonwebtoken');

const Member = require('../models/member')

const memberAuth = async (req,res,next) => {
    try {
        const token = req.header('Authorization').replace("Bearer ","")
        const decode = jwt.verify(token,"mysecret")

        const member = await Member.findOne({
            _id :decode._id,
            "tokens.token": token,
        })

        if (!member) {
            throw new Error()
        }

        req.token = token;

        req.member = member;
        next();

    } catch (error) {
        res.status(401).send({error:"pleace Autho member not found"});
        
    }

}


module.exports = memberAuth;