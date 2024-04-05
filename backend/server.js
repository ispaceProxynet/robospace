
import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose'
import expressLayout from 'express-ejs-layouts'
import bodyParser from 'body-parser';
import main from './route/main.js';
import methodOverride from 'method-override';

dotenv.config()




const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('assets'));
app.use(methodOverride('_method'));


// Templating Engine
app.use(expressLayout)
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
app.use('/', main);




// Connecting to mongoDB
const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });


const PORT = process.env.PORT
app.listen(PORT, () =>{
    console.log('server is running on port', PORT)
})