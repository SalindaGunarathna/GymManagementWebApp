const  mongoose = require('mongoose')

const Schema = mongoose.Schema;

const exerciseSheama = new Schema(
    {
        exerciseID:{type: 'number',required: false,
            unique: false,
        },
        exercisName:{ type: 'String',required: false},

        image:{ type: 'String', required: false, },

        videioUrl: {type: 'String',  required: false},

        step: [{type: 'String', required: false}],
    }
    
);




const Exercise = mongoose.model('Exercise',exerciseSheama);
module.exports = Exercise;
