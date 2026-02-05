const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Root mei swagat hai")
})
const PORT = 8088;
app.listen(PORT , ()=>{
    console.log("SERVER CONNECTED AT PORT :${PORT}");
})