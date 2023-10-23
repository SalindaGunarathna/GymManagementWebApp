const  mongoose = require ('mongoose')
const jwt  = require('jsonwebtoken')
const bcrypt= require('bcryptjs')

const Schema = mongoose.Schema;

const coachSheama = new Schema(
    
    {
        coachID: {
            type: String,
            required: false,  default: '',  
        },
        firstName:{  type: String, required: false,default: '',},

        lastName:{ type: String,default: '', },

        profile: { type: String,default: '',},

        email: { type: String,require: false,default: '',
        },

        password: { type:String, required: false, trim : true,
        },

        qualification: [{ type: String, required: false,}],

        description: { type: String, required: false,},

        mobileNO: { type: String, required: false,},

        tokens: [{
            token : String,
        
        }]
    }     
)



coachSheama.pre("save", async function (next)
    {
        const coach = this;
        if(coach.isModified("password"))
        {
            coach.password = await bcrypt.hash(coach.password,8)
            // 8 for  normly 8 terms pasword decrypt
        }
        next();
    }
)



coachSheama.statics.findByCredentialsCoach = async (email,password) => {
    const coach =await Choach.findOne({email})

    if (!coach) {
        throw new Error()
    }
    const isMatch = await bcrypt.compare(password, coach.password)
    if (!isMatch) {
        throw new Error()
    }

    return coach;

}


coachSheama.methods.generateAuthToken = async function (){

    const coach = this;
   const token =  jwt.sign({_id : coach._id.toString()},"mysecret")

    coach.tokens = coach.tokens.concat({token})

    await coach.save()

    return  token;   

}


const Choach = mongoose.model('Choach',coachSheama)

module.exports = Choach ;


