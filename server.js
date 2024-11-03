const express = require('express');
const userRoutes = require('./routes/userRoutes');
const bouncerRoutes = require('./routes/bouncerRoutes')

const db = require('./config/db');
const morgan = require('morgan')

const app = express();

const PORT = 8000;


// middleware

app.use(express.json());

// app.use(morgan('dev'));

// routes

// user routes 

app.use('/api/user', userRoutes);

// bouncer routes

app.use('/api/bouncer', bouncerRoutes);



// 

db.query('SELECT 1')
.then((data)=>{

    app.listen(PORT , ()=>{
        console.log("server connected")
    })
}).catch((err)=>{
    console.log(err)
})
