const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/src/pages/index.html")
})


app.listen(3000, function(){
    console.log('App listen in pornt 300 => http://localhost:3000')
})