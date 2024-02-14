const mongoose = require('mongoose');
require("dotenv").config()

let url =process.env.URL


mongoose.connect(url,{
    useNewUrlParser :  true,
    useUnifiedTopology: true,

});


const conection  = mongoose.connection
mongoose.set('strictQuery',true)


conection.once("open", ()=>{
    try {
        
        console.log('data base is connected');  
    } catch (error) {
        
        console.log(error)
    }
})
