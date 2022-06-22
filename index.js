var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var router = require('./route')

mongoose.connect("mongodb+srv://JinalRajpara:jinu3011@cluster0.hf8ji.mongodb.net/Movie?retryWrites=true&w=majority").then(()=>{
    console.log("DB Connected");

    app = express()
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(express.json())
    app.use('/api',router)

    app.listen(process.env.PORT,()=>{
        console.log("Server Started.");
    })
}).catch((err)=>{
    console.log(err);
})

/*
var app = express()
app.use('/api',router)
app.listen(process.env.PORT,()=>{
    console.log("Server Started");
}) */