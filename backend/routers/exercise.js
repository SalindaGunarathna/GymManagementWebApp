const express = require('express')
const router = express.Router();
const Exercise = require('../models/exercise')
const Exerciseontroller =require('../controllers/exercise')
const  auth = require ('../middleware/adiminAutho')

// add exercise
router.post('/exercise', Exerciseontroller.addExercise);

//retrieve all exercises
router.get("/exercise",Exerciseontroller.retrirvAll)

// delete Exercise
router.delete("/exercise/:id", Exerciseontroller.delete)

// get  one by id 
router.get("/exercise/:exerciseID", Exerciseontroller.findById)
  
module.exports = router;