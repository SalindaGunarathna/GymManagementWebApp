
const express = require('express')

const router = express.Router();
const { check } = require("express-validator");


const auth =require( '../middleware/adiminAutho')

const Admin =require ('../models/admin');
const createHttpError = require('http-errors');

const AdminController = require('../controllers/admin')
// login Admin
router.post('/admin/login',AdminController.loginAdmin )

// log out Admin
router.post('/admin/logout',AdminController.logoutAdmin)

// add new admin  
router.post('/admin',AdminController.addAdmin );


//retrieve all admin
router.get("/admin",AdminController.retrieveAllAdmin)

// delete admin
router.delete("/admin/:id", AdminController.deleteAdmin)

// get user by name 
router.get('/admin/:adminRegNo',AdminController.findbyName );


module.exports = router;