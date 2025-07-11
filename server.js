const express = require('express')
const mongoose = require('mongoose');
const bookRoutes = require('./src/routes/books');
const app = express()
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

app.use(express.json());

app.get("/",(req,res)=>{
res.send("Working....")

});
app.use('/books', bookRoutes);




app.listen(port,()=>{
    console.log("server is running")
})