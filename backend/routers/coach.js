
const express = require('express')
const router = express.Router();
const coachAuth = require('../middleware/coachAutho');
const Coach = require('../models/coach')
const auth =require( '../middleware/adiminAutho')
const CoachController = require('../controllers/coach')
//import auth from '../middleware/adiminAutho'
// login
router.post('/coach/login',CoachController.logincoach )

// log out
router.post('/coach/logout',CoachController.logOut)

// add new coach
router.post('/coach',auth,CoachController.addCoach 
)

// retrive all coaches 
router.get("/coach",auth,CoachController.retrievAll)

// delete coach
router.delete('/coach/:coachID',auth, CoachController.delete);


// get coach by id 
  router.get("/coach/:coachID", CoachController.findByID)

//   updata payment status
router.put('/coach/:coachID',);


module.exports = router;