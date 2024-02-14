const express = require('express')
const router = express.Router();
const Member = require('../models/member')
const memberAutho = require('../middleware/memberAutho');
const createHttpError = require('http-errors');
const auth = require('../middleware/adiminAutho');


exports.addMember = async (req, res, next) => {

    const gender = req.body.gender
    const email = req.body.email
    const password = req.body.password
    const firstName = req.body.firstName
    const memberID = req.body.memberID
    const member = new Member(req.body);
    //const {gender, email, password, firstName, memberID}= req.body;

    try {

        const {profile} = req.files;



        if (!firstName || !email || !password || !memberID ) {
            throw createHttpError(400, "missing required details ")
        }

        const isMemberAvailable = await Member.findOne({ email: email }).exec()

        if (isMemberAvailable) {

            throw createHttpError(400, "Member  Already available ")
        }
        
       

        await member.save();
        res.status(200).send(member);


    } catch (error) {
        next(error)

    }
}

exports.loginMember = async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    try {

        if (!email || !password) {
            throw createHttpError(404, "missing email  or password")
        }

        try {

            var member = await Member.findByCredentialsM(req.body.email, req.body.password)
        } catch (error) {

            throw createHttpError(404, "Member not found")
        }



        const token = await member.generateAuthToken()

        //console.log(token);
        res.send({ member, token })
        //res.send(member)

    } catch (error) {

        next(error)
    }

}

exports.logOutMember = async (req, res) => {
    try {
        req.member.tokens = req.member.tokens.filter((token) => {
            return token.token !== req.token;
        })

        await req.member.save();

        res.send();

    } catch (error) {
        res.status(500).send();
    }

}

exports.retrieveAllMembers = async (req, res) => {

    try {
        const task = await Member.find({});
        res.status(201).send(task)

    } catch (error) {
        res.status(400).send(error)

    }

}


exports.loginWithToken = async (req, res) => {

    const _id = req.member._id;

    try {
        const member = await Member.findById(_id);

        res.status(201).send(member)

    } catch (error) {
        res.status(400).send(error)

    }

}


exports.findByID = async (req, res) => {

    try {
        const member = await Member.findOne({ memberID: req.params.memberID });
        res.status(201).send(member)

    } catch (error) {
        res.status(400).send(error)

    }

}

exports.deleteMember = async (req, res) => {
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
}

exports.updateMember = async (req, res, next) => {

    const {
        packageNo,
        paidAmount,
        paid,
        gender,
        height,
        weight,
        age,
        contactNo,
        lastName,
        firstName,

    } = req.body;

    const memberID = req.params.memberID;

    try {

        let member = await Member.findOne({ memberID: memberID });
        

        try {
            var {profile} = req.files;
           
            if (!profile) {
                throw createHttpError(404, "profile not found");
            }


            if (!profile.mimetype.startsWith('profile')) {
                throw createHttpError(404, "only profile are allowed");
            }

            let filepath = __dirname + '../../public/profile/' + profile.name

            profile.mv(filepath)

            let fileUploadpath = '/public/profile/' + profile.name




            
            if (!member) {
                throw createHttpError(404, "no member found")
            }

        } catch (error) {
            next(error)

        }



        member.packageNo = packageNo
        member.paidAmount = paidAmount
        member.paid = paid
        member.gender = gender
        member.height = height
        member.weight = weight
        member.age = age

        member.contactNo = contactNo
        member.lastName = lastName
        member.firstName = firstName

         if (profile)
         {
             member.profile = fileUploadpath;
        }

        const result = await member.save()

        res.status(200).send(result);




        res.status(200).json({ message: 'Member updated successfully' });
    } catch (error) {
        next(error);
    }
}
