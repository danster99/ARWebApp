var express = require("express");
var app = express();

app.listen(process.env.PORT || 80, () => {
    console.log("Listening on http://visualizr-ar.herokuapp.com:80");
    
});

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });