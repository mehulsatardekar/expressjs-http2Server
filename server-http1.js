const express = require('express');
const app = express();
const PORT = 8081;

app.get('/', function (req, res) {
    res.send('Hello World')
  })
  
  app.get('/about',(req,res)=>{
  
    res.send(`<html><body><img src="https://d1lf7jq9a5epx3.cloudfront.net/wp-content/uploads/sites/2/2015/11/http2.jpg"/></body></html>`)
  })
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})

