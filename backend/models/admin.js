
const   mongoose = require ('mongoose')
const jwt  = require('jsonwebtoken')
const bcrypt= require('bcryptjs')

const Schema = mongoose.Schema;

const adminSheam = new Schema(
    {
        adminRegNo:{type: String,required: false,
            unique: false,
        },
        firstName:{ type: String,required: false},

        lastName:{type: String,required: false,},

        email:{ type: String,required: false,},

        contactNo:{type:"number"},

        profile:{ type: String, required: false, },

        role: {type: String,  required: false},

        password: { type: String, 
        trim : true,
        required : false,},
        tokens: [{
            token : String,
        
        }]

    }
    
);


adminSheam.pre("save", async function (next)
{
    const admin = this;
    if(admin.isModified("password"))
    {
        admin.password = await bcrypt.hash(admin.password,8)
        // 8 for  normly 8 terms pasword decrypt
    }

    next();

})

// satatic no need create user  cmapare this method authondiaction
adminSheam.statics.findByCredentials = async (email,password) => {
    const admin =await Admin.findOne({email})

    if (!admin) {
        throw new Error()
    }

    const isMatch = await bcrypt.compare(password, admin.password)

    if (!isMatch) {
        throw new Error()
    }

    return admin;

}

adminSheam.methods.generateAuthToken = async function (){

    const admin = this;
   const token =  jwt.sign({_id : admin._id.toString()},"mysecret")

    admin.tokens = admin.tokens.concat({token})

    await admin.save()

    console.log("admin.tokens")

    return  token;   

}



const Admin = mongoose.model('Admin',adminSheam);
module.exports = Admin;
