const  mongoose = require('mongoose')

const Schema = mongoose.Schema;

const packageSheam = new Schema(
    {
        packageNo:{type: 'String',required: false,
            unique: true,
        },
        packageName:{ type: 'String',required: false},

        ageRange:{ type: 'String',required: false,},

        image:{ type: 'String', required: false, },

        miniWeight: {type: 'String',  required: false},

        miniHeight: {type: 'String', required: false},

        price: { type: 'String', required : false,},
        discription: {type: 'String',},
        exerciseNo :[{type: 'String', required: false}]

    }
    
);




const Package = mongoose.model('Package', packageSheam);
module.exports = Package;
