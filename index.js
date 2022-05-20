const express = require('express');
const app = express();


app.get("/",(request,response)=>{
   return reponse.json("WElcome");
})
app.listen(3000, () => { console.log("Server started") });
