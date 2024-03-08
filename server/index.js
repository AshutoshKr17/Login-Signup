const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors')
const {mongoose} = require('mongoose')
const cookieParser = require('cookie-parser')
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const session = require('express-session');

const app = express();

//databse connection
mongoose.connect(process.env.Mongo_URL)
.then(() => console.log('database connected'))
.catch((err)=> console.log('Database not connected'))

 


//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))


app.use('/', require('./routes/authRoutes'))




const port = 8000;

app.listen(port,()=> console.log(`Server is running on port $(port)`))