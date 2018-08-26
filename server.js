const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

let apiKey = "c025da23c3fa730bd5a60314d393f61b";


app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");


app.get("/", function(req, res) {
    res.render("index", {weather: null, error: null});
})

app.post("/", function(req, res){
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
   
    

    request(url, function (err, response, body){
        if(err) {
            res.render("index", {weather: null, error: "Error, Please try again!"});
        }else {
            let weather = JSON.parse(body);
            if(weather.main === undefined) {
                res.sender("index", {weather: null, error: "Error, Please try again!"});
            }else {
                let getTemperature = `It's currenty ${weather.main.temp} in ${weather.name}!`;
                res.render("index", {weather: getTemperature, error: null})
            }
            
;
            
            

        }
    });


})

app.listen(3000, function() {
    console.log("The magic is happening on port 3000!")
})