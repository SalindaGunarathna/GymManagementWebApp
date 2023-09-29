const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const bodyParser = require('body-parser');
const adminRouter = require('./routers/admin');


require ('./database/mongoose.js');

const app = express();

const port =4000;


app.use(cors());
app.use(bodyParser.json());
app.use(adminRouter);


app.listen(port,()=>{
    console.log('listening on port' + port);
});
