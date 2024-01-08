"use strict"

/* ---------------------------------------------*
MINT   
/* ---------------------------------------------*/

//! Basics
const express=require('express')
const app=express()

require('dotenv').config()
const HOST=process.env.HOST
const PORT=process.env.PORT

/* ---------------------------------------------*/

//! Home
app.use(express.json())
require('./dbConnection')

app.use(require('./src/middlewares/authorization'))

app.get('/', (req, res)=>{
    res.send('MINT')
})


//! Routes
app.use('/mint', require('./src/router/user'))
app.use('/mint', require('./src/router/salad'))
app.use('/mint', require('./src/router/vegTopping'))
app.use('/mint', require('./src/router/proteinTopping'))
app.use('/mint', require('./src/router/auth'))






/* ---------------------------------------------*/



app.use(require('./errorHandler.js'))
/* ---------------------------------------------*/
app.listen(PORT, ()=>console.log(`Running: ${HOST}:${PORT}`))