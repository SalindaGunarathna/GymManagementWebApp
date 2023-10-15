const express = require('express')
const router = express.Router();
const Member = require('../models/member')
const memberAutho = require('../middleware/memberAutho');

const auth = require ('../middleware/adiminAutho');


// loging member
router.post('/member/login', async (req, res) => {

    try {

        const member =  await Member.findByCredentialsM(req.body.email,req.body.password)

        const token = await member.generateAuthToken()

        //console.log(token);
        res.send({member,token})
        //res.send(member)
        
    } catch (error) {

        res.status(401).send();     
    }

})
  
// log out member
router.post('/member/logout',memberAutho, async (req, res) => {
    try {
        req.member.tokens = req.member.tokens.filter((token)=>{
            return token.token !==req.token;
        })

        await req.member.save();

        res.send();

    } catch (error) {
        res.status(500).send();
    }

})


// add new member
router.post('/member',auth, async (req, res) => {
  const member = new Member(req.body);
    try {
        await member.save();
        res.status(200).send(member);
        
    } catch (error) {
        res.status(400).send(error);
        
    }
});

// retrive all members
router.get("/member",auth,async (req,res)=>{

    try { 
        const task = await Member.find({});
        res.status(201).send(task)
        
    } catch (error) {
        res.status(400).send(error)
        
    }

})


// retrive test
router.get("/test",async (req,res)=>{

    try { 
        const task = await Member.find({});
        res.status(201).send(task)
        
    } catch (error) {
        res.status(400).send(error)
        
    }

})




// delete the Member
router.delete("/member/:id",auth, async(req,res)=>{
    try {
        const delateMember = await Member.findByIdAndDelete(res.params.id,res.body)

        if(!delateMember)
        {
           return res.status(400).send()
        }
        return res.status(400).send(delateMember)

    } catch (error) {
        
        res.status(404).send(error)
    }
})


module.exports = router;