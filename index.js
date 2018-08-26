// const request = require("request");
// const argv = require("yargs").argv;

// let apiKey = "c025da23c3fa730bd5a60314d393f61b";
// let city = argv.c || "Atlanta";
// let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`


// request(url, function (err, response, body){
//     if(err) {
//         console.log("error:", error)
//     }else {
//         let weather = JSON.parse(body);
//         let getTemperature = `It's currenty ${weather.main.temp} in ${weather.name} and with a speed
//         of ${weather.wind.speed}`;
        
//         console.log(getTemperature)
//         // console.log(weather)

//     }
// });


