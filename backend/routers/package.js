const express = require('express')

const router = express.Router();
const Package = require('../models/package')

const  auth = require('../middleware/adiminAutho')
const PackageController = require('../controllers/package')
// add package
router.post('/package',auth,PackageController.addPackage);

//retrieve all packages
router.get("/package",auth,PackageController.retrievAlll)

// delete package
router.delete('/package/:packageNo',auth, );

// find one package
router.get("/package/:packageNo",PackageController.findOne )

module.exports = router;