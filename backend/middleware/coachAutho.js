
const jwt  = require('jsonwebtoken');

const Coach = require('../models/coach')

const auth = async (req,res,next) => {
    try {
        const token = req.header('Authorization').replace("Bearer ","")
        const decode = jwt.verify(token,"mysecret")

        const coach = await Coach.findOne({
            _id :decode._id,
            "tokens.token": token,
        })

        if (!coach) {
            throw new Error()
        }

        req.token = token;

        req.coach = coach;
        next();

    } catch (error) {
        res.status(401).send({error:"pleace Autho"});
        
    }

}


module.exports = auth;