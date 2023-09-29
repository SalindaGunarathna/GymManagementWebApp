const express = require('express')

const router = express.Router();

const Admin = require('../models/admin')

router.post('/admin', async (req, res) => {

    const admin = new Admin(req.body);

    try {

        await admin.save();
        res.status(200).send(admin);
        
    } catch (error) {

        res.status(400).send(error);
        
    }
});


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