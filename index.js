const express = require('express');
const app = express();


app.get("/",function(request,response){
   return response.json("Hello Keerthana and Saahithi, Welcome To my World  ❤️🧑‍💻🧑‍💻");
})
app.listen(process.env.PORT || 3000);
