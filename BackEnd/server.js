// Requiring app 
const app = require('./app');

// Requiring Routes and using
app.use(require('./Routes/userrouter'))
app.use(require('./Routes/productrouter'))
app.use(require('./Routes/cartrouter'))
app.use(require('./Routes/orderrouter'))

// Requiring FileUpload and using
const fileupload = require('express-fileupload'); 
app.use(fileupload())

// Requiring and adding error middleware
const errormiddleware = require('./Middlewares/error');
app.use(errormiddleware)

// Requiring Cloudinary and configuring
const cloudinary = require('cloudinary');
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
})

// Handling Uncaught Exception 
process.on('uncaughtException',(err)=>{
    console.log(`Error ${err}`)
    console.log('Shutting down the server due to Uncaught Exception')
    process.exit(1)
})

// Defining Port from dotenv 
const port = process.env.PORT

// LISTENING 
const server = app.listen(port,()=>{
    console.log(`Listening at Port: ${port}`)
})

// Requiring Database Connection 
require('./Database/connection')

// Unhandled Promise Rejection 
process.on('unhandledRejection',err=>{
    console.log(`Error: ${err.message}`)
    console.log('Shutting down the server due to Unhandled promise rejection')
    server.close(()=>{
        process.exit(1)
    })
})