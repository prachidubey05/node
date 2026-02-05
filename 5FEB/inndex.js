const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Root mei swagat hai")
})
