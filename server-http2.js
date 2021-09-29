const express = require('express')
const http2Express = require('http2-express-bridge')
const http2 = require('http2')
const { readFileSync } = require('fs')

// Use the wrapper function that returns the application
const app = http2Express(express)

const options = {
    key: readFileSync('./keys/server.key'),
    cert: readFileSync('./keys/server.crt'),
    allowHTTP1: true 
};

app.get('/',(req, res)=> {
  res.send('Hello World')
})

app.get('/about',(req,res)=>{

  res.send(`<html><body><img src="https://d1lf7jq9a5epx3.cloudfront.net/wp-content/uploads/sites/2/2015/11/http2.jpg"/></body></html>`)
})

const server = http2.createSecureServer(options, app)

server.listen(8000, () => {
        console.log(`listening on port 3000`)
})

