const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

//env file ke andr wale variable ko lane ke liye hum ab config file ko include krenge
dotenv.config({path : './config.env'});
//database
const DB = process.env.DATABASE;  
//it returns promise
mongoose.set('strictQuery', false);
mongoose.connect(DB , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('connection successful');
}).catch((err)=>{
    console.log("No connection due to the error : " + err);
})
// middlewares
const middleware = (req , res , next)=>{
        console.log("My middleware is called");
        next();
}

app.get('/' , (req , res)=>{
    res.send('Hello world');
});
app.get('/about' ,middleware,(req ,res)=>{
    res.send("Hello from about me ladies");
});
app.get('/contact' , (req , res)=>{
    res.send("Hello world from contacts");
});
app.get('/signin' , (req , res)=>{
    res.send("Hello world from signin");
});
app.get('/signup' , (req , res)=>{
    res.send("Hello world from signup");
});
app.listen(3000 , ()=>{
    console.log("server is running fine Deepak");
})