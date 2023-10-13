
const express = require('express')

const router = express.Router();

const auth =require( '../middleware/adiminAutho')

const Admin =require ('../models/admin');

router.post('/admin/login', async (req, res) => {

    try {

        const admin =  await Admin.findByCredentials(req.body.email,req.body.password)

        const token = await admin.generateAuthToken()

        console.log(token);


        res.send({admin,token})
        
    } catch (error) {

        res.status(401).send();     
    }


})


router.post('/admin/logout',auth, async (req, res) => {
    try {
        req.admin.tokens = req.admin.tokens.filter((token)=>{
            return token.token !==req.token;
        })

        await req.admin.save();

        res.send();

    } catch (error) {
        res.status(500).send();
    }

})

// add new admin  
router.post('/admin', async (req, res) => {
  const admin = new Admin(req.body);
    try {
        await admin.save();
        res.status(200).send(admin);
        
    } catch (error) {
        res.status(400).send(error);
        
    }
});


//retrieve all admin
router.get("/admin",auth,async (req,res)=>{
    try {  
        const coach = await Admin.find({})
       
        res.status(201).send(coach)       
    } catch (error) {
        res.status(400).send(error)       
    }
})

// delete admin
router.delete("/admin/:id",auth, async(req,res)=>{
    try {
        const delateAdmin = await Admin.findByIdAndDelete(res.params.id,res.body)

        if(!delateTasks)
        {
           return res.status(400).send()
        }
        return res.status(400).send(delateAdmin)

    } catch (error) {
        
        res.status(404).send(error)
    }
})










// get user by name 
router.get('/admin/:name', async (req, res) => {
 // const _id = req.body.id;
    const _name = req.params.name;
    try {
      const admin = await Admin.find({ name: _name}); 
      const emails = admin.map(admin =>admin.email);  
        if(!admin.length >0 ) {
            console.log('No admin found');
            return res.status(404).send(); 
        }else {      
             res.json(emails);
            console.log(emails);
        }      
    } catch (error) {

        res.status(400).send(error);     
    }
});






module.exports = router;