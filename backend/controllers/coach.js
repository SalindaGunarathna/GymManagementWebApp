
const express = require('express')
const router = express.Router();
const coachAuth = require('../middleware/coachAutho');
const Coach = require('../models/coach')
const auth = require('../middleware/adiminAutho')
const createHttpError = require('http-errors');



exports.logincoach = async (req, res, next) => {

    const password = req.body.password
    const email = req.body.email

    try {

        if (!email || !password) {
            throw createHttpError(404, "missing email  or password")
        }

        try {

            var coach = await Coach.findByCredentialsCoach(req.body.email, req.body.password)
        } catch (error) {

            throw createHttpError(404, "coach not found")
        }

        const token = await coach.generateAuthToken()

        res.send({ coach, token })

    } catch (error) {

        next(error)
    }

}


exports.logOut = async (req, res) => {
    try {
        req.coach.tokens = req.coach.tokens.filter((token) => {
            return token.token !== req.token;
        })

        await req.coach.save();

        res.send();

    } catch (error) {
        res.status(500).send();
    }

}

exports.addCoach = async (req, res, next) => {


    const {
        password,
        email,
        firstName,
        coachID,
        mobileNO,
        description,
        qualification,
        lastName,

    } = req.body

    try {

        const { image } = req.files;

        if (!image) {
            throw createHttpError(404, "image not found");
        }


        if (!image.mimetype.startsWith('image')) {
            throw createHttpError(404, "only image are allowed");
        }

        let filepath = __dirname + '../../public/profile' + image.name

        image.mv(filepath)

        let fileUploadpath = '/public/profile/' + image.name


        if (!firstName || !email || !password || !coachID) {
            throw createHttpError(400, "missing required parameters")
        }

        const isCoachAvalile = await Coach.findOne({ email: email }).exec()

        if (isCoachAvalile) {
            throw createHttpError(400, "Coach  Allredy availbale ")
        }

        const coach = new Coach({
            password,
            email,
            firstName,
            coachID,
            mobileNO,
            description,
            qualification,
            lastName,
            profile :fileUploadpath
        });


        await coach.save();
        res.status(200).send(coach);

    } catch (error) {
        next(error);

    }
}



exports.retrievAll = async (req, res) => {

    try {
        const task = await Coach.find({});
        res.status(201).send(task)

    } catch (error) {
        res.status(400).send(error)
    }

}


exports.delete = async (req, res) => {
    try {
        const coachIDToDelete = req.params.coachID;

        // Use findOneAndDelete to delete by coachID

        const deletedPackage = await Coach.findOneAndDelete({ coachID: coachIDToDelete });

        if (!deletedPackage) {
            return res.status(404).json({ message: 'Member not found' });
        }

        return res.status(200).json({ message: 'Member deleted successfully', deletedPackage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.findByID = async (req, res) => {

    try {
        const coach = await Coach.findOne({ coachID: req.params.coachID });
        res.status(201).send(coach)

    } catch (error) {
        res.status(400).send(error)

    }

}

exports.update = async (req, res,next) => {

    const coachID = req.params.coachID;
    const {
        password,
        email,
        firstName,
        mobileNO,
        description,
        qualification,
        lastName,

    }  = req.body;


    try {


        if (!firstName || !email || !password || !coachID) {
            throw createHttpError(400, "missing required parameters")
        }
       
        const {image} = req.files

        let filepath
        let filepathtoUplaod;
        if (image) {

            if (!image.mimetype.startsWith("image/png")) {
                throw createHttpError(400, "only image are allowed ");
            }

            filepath = __dirname + '../../public/profile' + image.name
            image.mv(filepath)

            var fileUploadpath = '/public/profile/' + image.name

        };

        const coach = await Coach.findOne({ coachID :coachID }).exec();

        if (!coach) {
           throw createHttpError(404, "no coach found")
        }

        coach.firstName = firstName 
        coach.lastName = lastName
        coach.email = email
        coach.password = password
        coach.mobileNO = mobileNO
        coach.description = description
        coach.qualification =qualification
        
        if (image)
        {
            coach.profile = fileUploadpath;
        }

        const request = await  coach.save();

        res.status(200).send(request)

    } catch (error) {
       next(error);
    }
}


