const express = require('express')
const { validationResult } = require("express-validator");
const router = express.Router();

const auth = require('../middleware/adiminAutho')

const Admin = require('../models/admin');

const createHttpError = require('http-errors');


exports.loginAdmin = async (req, res, next) => {

    const password = req.body.password
    const email = req.body.email


    try {

        if (!email || !password) {
            //console.log('Please enter a valid email')
            throw createHttpError(400, "missing email  or password")

        }

        try {
            var admin = await Admin.findByCredentials(req.body.email, req.body.password)

        } catch (error) {

            throw createHttpError(400, "Admin not found ")

        }

        const token = await admin.generateAuthToken()

        //console.log(token);

        res.send({ admin, token })

    } catch (error) {

        next(error)
    }


}

exports.logoutAdmin = async (req, res) => {
    try {
        req.admin.tokens = req.admin.tokens.filter((token) => {
            return token.token !== req.token;
        })

        await req.admin.save();

        res.send();

    } catch (error) {
        next(error);
    }

}

exports.addAdmin = async (req, res, next) => {
    const {
        firstName,
        email,
        password,
        adminRegNo
    } = req.body;

    try {

        const { profile } = req.files;

        if (!profile) {
            throw createHttpError(404, "profile not found")
        }
        let filepath = __dirname + "../../public/profile/" + profile.name
        profile.mv(filepath)

        let filepathUploading = "/public/profile/" + profile.name;

        
        console.log(filepathUploading)
        if (!password || !email || !adminRegNo) {
            throw createHttpError(400, "missing required parameters")

        }

        const isAdminAvailable = await Admin.findOne({ email: email }).exec()

        if (isAdminAvailable) {
            throw createHttpError(400, "Admin Already available ")
        }

        // if (!profile) {
        //     admin.profile = filepathUploading
        // }

        const admin = new Admin({
            email, password, firstName, adminRegNo,
            profile: filepathUploading
        })


        await admin.save();
        res.status(200).send(admin);

    } catch (error) {
        next(error)

    }
}


exports.deleteAdmin = async (req, res) => {
    try {
        const delateAdmin = await Admin.findByIdAndDelete(res.params.id, res.body)

        if (!delateTasks) {
            return res.status(400).send()
        }
        return res.status(400).send(delateAdmin)

    } catch (error) {

        res.status(404).send(error)
    }
}

exports.retrieveAllAdmin = async (req, res) => {
    try {
        const coach = await Admin.find({})

        res.status(201).send(coach)
    } catch (error) {
        res.status(400).send(error)
    }
}


exports.findbyName = async (req, res) => {
    // const _id = req.body.id;
    try {
        const admin = await Admin.findOne({ adminRegNo: req.params.adminRegNo });
        res.status(201).send(admin)

    } catch (error) {
        res.status(400).send(error)

    }
}
