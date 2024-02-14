const express = require('express')

const router = express.Router();
const Package = require('../models/package')

const  auth = require('../middleware/adiminAutho')

exports.addPackage = async (req, res) => {
    const pakage = new Package(req.body);
      try {
          await pakage.save();
          res.status(200).send(pakage);
          
      } catch (error) {
          res.status(400).send(error);
          
      } 
  }

  exports.retrievAlll = async (req,res)=>{
    try {  
        const coach = await Package.find({})
       
        res.status(201).send(coach)       
    } catch (error) {
        res.status(400).send(error)       
    }
}

exports.deletePackage = async (req, res) => {
    try {
      const packageNoToDelete = req.params.packageNo;
  
      // Use findOneAndDelete to delete by packageNo
      const deletedPackage = await Package.findOneAndDelete({ packageNo: packageNoToDelete });
  
      if (!deletedPackage) {
        return res.status(404).json({ message: 'Package not found' });
      }
  
      return res.status(200).json({ message: 'Package deleted successfully', deletedPackage });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }


exports.findOne =async (req, res) => {

    try {
        const package = await Package.findOne({packageNo: req.params.packageNo});
        res.json(package.exerciseNo);
  
        
  
    } catch (error) {
        res.status(400).send(error)
  
    }
  
  }

