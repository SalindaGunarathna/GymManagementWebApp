const express = require('express')
const router = express.Router();
const Member = require('../models/member')
const memberAutho = require('../middleware/memberAutho');

const auth = require('../middleware/adiminAutho');


// loging member
router.post('/member/login', async (req, res) => {

    try {

        const member = await Member.findByCredentialsM(req.body.email, req.body.password)

        const token = await member.generateAuthToken()

        //console.log(token);
        res.send({member,token })
        //res.send(member)

    } catch (error) {

        res.status(401).send();
    }

})

// log out member
router.post('/member/logout', memberAutho, async (req, res) => {
    try {
        req.member.tokens = req.member.tokens.filter((token) => {
            return token.token !== req.token;
        })

        await req.member.save();

        res.send();

    } catch (error) {
        res.status(500).send();
    }

})


// add new member
router.post('/member', async (req, res) => {
    const member = new Member(req.body);
    try {
        await member.save();
        res.status(200).send(member);

    } catch (error) {
        res.status(400).send(error);

    }
});

// retrive all members
router.get("/member",auth, async (req, res) => {

    try {
        const task = await Member.find({});
        res.status(201).send(task)

    } catch (error) {
        res.status(400).send(error)

    }

})



// login profile
router.get("/member/me",memberAutho, async (req, res) => {

    const  _id = req.member._id;

    try {
        const member = await Member.findById(_id);

        res.status(201).send(member)

    } catch (error) {
        res.status(400).send(error)

    }

})


// fin by id 
router.get("/member/:memberID", async (req, res) => {

    try {
        const member = await Member.findOne({memberID: req.params.memberID});
        res.status(201).send(member)

    } catch (error) {
        res.status(400).send(error)

    }

})






// delete the Member
router.delete('/member/:memberID',auth, async (req, res) => {
    try {
        const memberIDToDelete = req.params.memberID;

        // Use findOneAndDelete to delete by memberID
        const deletedMember = await Member.findOneAndDelete({ memberID: memberIDToDelete });

        if (!deletedMember) {
            return res.status(404).json({ message: 'Memebr not found' });
        }

        return res.status(200).json({ message: 'Mameber deleted successfully', deletedMember });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


//   updata payment status
router.put('/member/:memberID', async (req, res) => {
    try {
        const memberID = req.params.memberID;
        const updatedData = req.body; 

        const member = await Member.findOneAndUpdate({ memberID }, updatedData, {
            new: true, // To get the updated member
        });

        
        if (!member) {
            return res.status(404).json({ message: 'Member not found' });
        }

        res.status(200).json({ message: 'Member updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;