const express = require('express');
const app = express();


app.get("/",function(request,response){
   return response.json("WElcome");
})
app.listen(process.env.PORT || 3000);
