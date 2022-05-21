const express = require('express');
const app = express();


app.get("/",function(request,response){
   return response.json("Hello Friends these is lovely srinu, Welcome To my World  ❤️🧑‍💻🧑‍💻");
})
app.listen(process.env.PORT || 3000);
