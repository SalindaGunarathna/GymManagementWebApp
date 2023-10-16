
const express = require('express')
const router = express.Router();
const coachAuth = require('../middleware/coachAutho');
const Coach = require('../models/coach')
const auth =require( '../middleware/adiminAutho')

// import auth from '../middleware/adiminAutho'
// login
router.post('/coach/login', async (req, res) => {

    try {

        const coach =  await Coach.findByCredentialsCoach(req.body.email,req.body.password)

        const token = await coach.generateAuthToken()

        res.send({coach,token})
        
    } catch (error) {

        res.status(401).send();     
    }

})

// log out
router.post('/coach/logout',coachAuth, async (req, res) => {
    try {
        req.coach.tokens = req.coach.tokens.filter((token)=>{
            return token.token !==req.token;
        })

        await req.coach.save();

        res.send();

    } catch (error) {
        res.status(500).send();
    }

})


// add new coach
router.post('/coach', async (req, res) => {
     const coach = new Coach(req.body);
      try {
        await coach.save();
        res.status(200).send(coach);
        
       } catch (error) {
        res.status(400).send(error);
        
       }
    }
)

// retrive all coaches 
router.get("/coach",async (req,res)=>{

    try {  
        const task = await Coach.find({});
        res.status(201).send(task)
        
    } catch (error) {
        res.status(400).send(error)       
    }

})


// delete coach
router.delete('/package/:coachID', async (req, res) => {
    try {
      const coachIDToDelete = req.params.coachID;
  
      // Use findOneAndDelete to delete by coachID
      const deletedPackage = await Coach.findOneAndDelete({ coachID: coachIDToDelete });
  
      if (!deletedPackage) {
        return res.status(404).json({ message: 'Member not found' });
      }
  
      return res.status(200).json({ message: 'Member deleted successfully', deletedPackage });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });





module.exports = router;