const  mongoose = require('mongoose')

const Schema = mongoose.Schema;


const permissionsSheam = new Schema(
    {
        
    }
)

const adminSheam = new Schema(
    {
        admin_id:{
            type: 'String',
            required: true,
            unique: true,

        },
        first_name:
        {
            type: 'String',
            required: true,
            
        
        },
        last_name:{
            type: 'String',
            required: true,
        },
        email:{
            type: 'String',
            required: true,

        },
        contact_no:{
            type:'number',

           
        },
        profile:{
            type: 'String',
            required: true,
        }
    }

    
);




const Admin = mongoose.model('Admin',adminSheam);
module.exports = Admin;
