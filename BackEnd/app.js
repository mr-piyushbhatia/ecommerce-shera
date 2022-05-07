const express = require('express');
const app = express()

// Requiring bodyParser and using as json
const bodyParser = require('body-parser');
// app.use(bodyParser.json({limit:"50mb"}))
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended:true,limit: '50mb'}));

// Requiring cookieParser and using
const cookieParser = require('cookie-parser');
app.use(cookieParser())

const path  = require('path');  

// Requiring dotenv and configuring
// if(process.env.NODE_ENV !== 'production'){
// const dotenv = require('dotenv');
// dotenv.config({path:'./BackEnd/Config/config.env'})
// }
// if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'../frontend/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'../frontend/build/index.html'))
    })
// }

module.exports= app