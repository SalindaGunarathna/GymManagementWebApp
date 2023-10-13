const express = require('express')

const router = express.Router();
const Package = require('../models/package')

const  auth = require('../middleware/adiminAutho')

// add package
router.post('/package',auth, async (req, res) => {
  const pakage = new Package(req.body);
    try {
        await pakage.save();
        res.status(200).send(pakage);
        
    } catch (error) {
        res.status(400).send(error);
        
    } 
});


//retrieve all packages
router.get("/package",auth,async (req,res)=>{
    try {  
        const coach = await Package.find({})
       
        res.status(201).send(coach)       
    } catch (error) {
        res.status(400).send(error)       
    }
})

// delete package
router.delete("/package/:id",auth, async(req,res)=>{
    try {
        const delatePackage = await Package.findByIdAndDelete(res.params.id,res.body)

        if(!delatePackage)
        {
           return res.status(400).send()
        }
        return res.status(400).send(delatePackage)

    } catch (error) {
        
        res.status(404).send(error)
    }
})

module.exports = router;