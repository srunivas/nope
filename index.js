const express = require('express');
const app = express();


app.get("/",function(request,response){
   return reponse.json("WElcome");
})
app.listen(process.env.PORT || 3000);
