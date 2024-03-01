const express = require('express')
require('dotenv').config()
const app = express()


console.log(process.env.port) // remove this after you've confirmed it is working

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.port, ()=>{
    console.log("Listening port...",process.env.port)
})