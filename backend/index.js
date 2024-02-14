const  express = require ('express');
const mongoose = require('mongoose');
require("dotenv").config()
const createHttpError = require('http-errors');

const  fileUpload = require('express-fileupload');


const cors = require('cors');
const bodyParser = require('body-parser');
const adminRouter = require('./routers/admin');
const coachRoute = require('./routers/coach');
const membersRoute = require('./routers/member');
const packagesRoute = require('./routers/package');
const exerciseRoute = require('./routers/exercise');

const homaPageRoute = require('./controllers/homepageController');


require ('./database/mongoose.js');

const app = express();

const port =process.env.PORT 


app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());

app.use('/public/profile', express.static('public/profile'));

app.use(adminRouter);  
app.use(coachRoute);
app.use(membersRoute);
app.use(packagesRoute);
app.use(exerciseRoute);
app.use(homaPageRoute);


app.get('/',(req,res,next)=>{

    try {
        throw createHttpError(404,"Invalid")
        
    } catch (error) {
        next(error);
        
    }
})

app.use((err,req,res,next)=>{

    if(createHttpError.isHttpError(err))
    {
        res.status(err.status).send({message: err.message })

    }else{
        res.status(500).send({message: err.message })

    }

    res.status(500).send({message: "Error Unknown " })


})


app.listen(port,()=>{
    console.log('listening on port' + port);
});
