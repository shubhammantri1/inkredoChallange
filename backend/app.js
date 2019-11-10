const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const companyRoutes = require('./employee/routes/companies');
const employeeRoutes = require('./employee/routes/employee');
const app = express();

app.user(bodyParser.json());

mongoose.connect()
.then(()=>{
    console.log('Successfully connected to MongoDB Atlas');
})
.catch((error)=>{
    console.log('Unable to connect to MongoDB Atlas');
    console.error(error);
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/home/companies', companyRoutes);
app.use('/home/employee', employeeRoutes);


module.exports = app;