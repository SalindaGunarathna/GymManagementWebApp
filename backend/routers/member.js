const express = require('express')
const router = express.Router();
const Member = require('../models/member')
const memberAuth = require('../middleware/memberAutho');

const auth = require('../middleware/adiminAutho');
const MemberController = require('../controllers/members');

// login member
router.post('/member/login',MemberController.loginMember )

// log out member
router.post('/member/logout', memberAuth, MemberController.logOutMember)

// add new member
router.post('/member',MemberController.addMember );

// retrieve all members
router.get("/member",auth,MemberController.retrieveAllMembers)

// login profile with authentication 
router.get("/member/me",memberAuth,MemberController.loginWithToken )

// fin by id 
router.get("/member/:memberID",MemberController.findByID)

// delete the Member
router.delete('/member/:memberID',auth,MemberController.deleteMember );

//   update payment status
router.put('/member/:memberID', MemberController.updateMember);


module.exports = router;