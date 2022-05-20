require("dotenv").config();
const express = require('express');
const app = express();
var cors = require('cors');
const { response } = require('express');
const jwt = require('jsonwebtoken');
const res = require('express/lib/response');
const jsonwebtoken = require('jsonwebtoken');

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({
//     extended: true,
// }))

app.get("/", (request, response) => {

    if (response.statusCode === 200) {
        var accessToken = jwt.sign("srinu", process.env.ACCESS_TOKEN_SECRET);
        response.json(accessToken);
    } else {
        response.json("Error");
    }
})

app.post("/post", authenicate, (request, response) => {
    response.json("Hello")
})
app.get("/hello", authenicate, (request, response) => {
    return response.json("Send")
})

async function authenicate(request, response, next) {
    var user = "srinu";
    try {
        var token = await request.headers['authorization'];
        token = token.split(" ")[1];
        console.log(token.length);
        console.log(typeof(token));
        console.log("token =", token);
        if (token === null) {
            return response.json("UnAuthorized")
        } else {
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
                if (err) {
                    console.log("error jwt");
                    return response.json("unAuthorized");
                } else {
                    next();
                }
            })
        }
    } catch (error) {
        console.log(token);
        console.log(typeof(token));
        response.json("Error UnAuthorized");
    }

}


app.listen(4000, () => { console.log("Server started2") });