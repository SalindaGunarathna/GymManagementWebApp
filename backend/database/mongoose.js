const mongoose = require('mongoose');

let url = "mongodb+srv://salinda:salinda123@cluster0.yosckxd.mongodb.net/gymDatabase?retryWrites=true&w=majority"
let urlData= "mongodb://127.0.0.1:27017/gymDatabase"

mongoose.connect(url,{
    useNewUrlParser :  true,
    useUnifiedTopology: true,

});


const conection  = mongoose.connection
mongoose.set('strictQuery',true)


conection.once("open", ()=>{
    console.log('data base is connected');  
})
