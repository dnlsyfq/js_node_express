"use strict";

const express = require('express');
const app = express();
let exphbs = require('express-handlebars');


app.use('/static',express.static('public'));

app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');


app.get('/',(req,res)=>{
    console.log(req.url);
    // res.send("<h1>Hello</h1>");
    res.render('home');
})



app.listen(3000,(err)=>{
    if(err){
        console.log(`Error ${err}`);
        return;
    }

    console.log("Listening on port 3000");
})
