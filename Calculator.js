//require allows use node modules and packages
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// urlencoded analice dates from a html document -- obtains a server's information
// extended:true allows to posts nested objects, that bodyParser requires
//bodyParser allows access to any of the routes and can use req.body(parsed version of http request)
app.use(bodyParser.urlencoded({extended: true}));

// req = request -- res = response
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    result = num1 + num2;

    res.send("The result is: " + result);
});
app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){

    var weight = parseFloat(req.body.wg);
    var height = parseFloat(req.body.hg);

    var bmi = weight / (height*height);

    res.send("Your BMI is " + bmi);
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});