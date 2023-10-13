const express = require('express')
const router = express.Router();
const coachAuth = require('../middleware/coachAutho');
const Coach = require('../models/coach')
const Package = require('../models/package')

router.get("/homepackages",async (req,res)=>{
    try {  
        const package = await Package.find({},{
            packageName:1,
            ageRange:1,
            image:1,
            price:1,
            discription:1,
            _id:0
        }).limit(3);
        
        res.status(201).send(package) ;      
    } catch (error) {
        res.status(400).send(error)       
    }
})


// retrive 3 coaches 
router.get("/homecoach",async (req,res)=>{
    try {  
        const coach = await Coach.find({},{profile:1,firstName:1,discription:1,_id:0}).limit(3);
       
        res.status(201).send(coach)       
    } catch (error) {
        res.status(400).send(error)       
    }
})


module.exports = router;