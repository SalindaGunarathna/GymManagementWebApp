const  mongoose = require('mongoose')
const jwt  = require('jsonwebtoken')
const bcrypt= require('bcryptjs')


const Schema = mongoose.Schema;

const memberSheam = new Schema(
    {
        memberID:{type: 'String',required: false,
            unique: true, default:"",
        },
        firstName:{ type: 'String',required: false,default: '',},

        lastName:{type: 'String',required: false,default: '',},

        email:{ type: 'String',required: false,default: '',
        unique: true,},

        password: { type: 'String', required : false,trim : true,default: '',},

        contactNo:{type:'number',default: '',},

        profile:{ type: 'String', required: false,default: '', },

        age: {type: 'number',  required: false,default: '',},

        weight: {type: 'String', required: false,default: '',},

        height: {type: 'String', required: false,default: '',},

        gender: {type: 'String',default: '',},

         paid:{type: 'String', required: false,default: '',},

        paidAmount :{type: Number,default: '',},
        

        packageNo: {type: 'String', required: false,default: '',},
        selectedExerciseNo:[{ type : 'String' ,default: '',}],
        tokens: [{
            token : String,
        
        }]      
    }
    
);

memberSheam.pre("save", async function (next)
{
    const member = this;
    if(member.isModified("password"))
    {
        member.password = await bcrypt.hash(member.password,8)
        // 8 for  normly 8 terms pasword decrypt
    }
    next();

})

// satatic no need create user  cmapare this method authondiaction
memberSheam.statics.findByCredentialsM = async (email,password) => {
    const member =await Member.findOne({email})

    if (!member) {
        throw new Error()
    }
    const isMatch = await bcrypt.compare(password, member.password)

    if (!isMatch) {
        throw new Error()
    }

    return member;

}

memberSheam.methods.generateAuthToken = async function (){

    const member = this;
   const token =  jwt.sign({_id : member._id.toString()},"mysecret")

    member.tokens = member.tokens.concat({token})

    await member.save()

    return  token;   

}



const Member = mongoose.model('Member',memberSheam);
module.exports = Member;
