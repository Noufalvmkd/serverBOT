const express = require('express')
const mongoose = require('mongoose');
const bookRoutes = require('./src/routes/books');
const app = express()
require('dotenv').config();
const authRoutes = require('./src/routes/auth');
const cors = require('cors');

app.use(express.json());

app.use(cors());


const port = 3001



mongoose.connect("mongodb+srv://noufalvmkd:0KSClvBgTpHzOvyb@bookapclustor.wtbanqy.mongodb.net/?retryWrites=true&w=majority&appName=bookapclustor")
.then(res=>{
    console.log("db connected successfully")
}).catch(
    err=>{
        console.log("error")
        console.log(err)
    }
)



app.get("/",(req,res)=>{
res.send("Working....")

});
app.use('/books', bookRoutes);

app.use('/', authRoutes);


app.listen(port,()=>{
    console.log("server is running")
})