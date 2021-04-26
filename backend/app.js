const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();




mongoose.connect(process.env.DB_CONNECTION, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, ()=>{
    console.log('Connected to db')  //coming here means connect has worked properly
});

//how to start listening? by server
app.listen(3000)