const express = require('express');
const hbs=require('hbs');
var app= express();
app.set('view engine',hbs');
app.get('/',(req,res)=>{
    res.render('index.hbs')
} );
app.listen(3000);