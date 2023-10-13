const  express = require ('express');
const mongoose = require('mongoose');

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

const port =4000;


app.use(cors());
app.use(bodyParser.json());
app.use(adminRouter);
app.use(coachRoute);
app.use(membersRoute);
app.use(packagesRoute);
app.use(exerciseRoute);

// pages

app.use(homaPageRoute);


app.listen(port,()=>{
    console.log('listening on port' + port);
});
