const express = require('express')
const router = express.Router();
const Exercise = require('../models/exercise')

const  auth = require ('../middleware/adiminAutho')

// add exercise
router.post('/exercise',auth, async (req, res) => {
  const exercis = new Exercise(req.body);
    try {
        await exercis.save();
        res.status(200).send(exercis);
        
    } catch (error) {
        res.status(400).send(error);
        
    } 
});

//retrieve all exercises
router.get("/exercise",auth,async (req,res)=>{
    try {  
        const coach = await Exercise.find({})
       
        res.status(201).send(coach)       
    } catch (error) {
        res.status(400).send(error)       
    }
})


// delete Exercise
router.delete("/exercise/:id",auth, async(req,res)=>{
    try {
        const delateExercise = await Exercise.findByIdAndDelete(res.params.id,res.body)

        if(!delateExercise)
        {
           return res.status(400).send()
        }
        return res.status(400).send(delateExercise)

    } catch (error) {
        
        res.status(404).send(error)
    }
})

module.exports = router;