// async function a(){
// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '60f6a36b91msh6beb1c5858f3ad4p14b02djsn74ace3c3a2d8',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url +`city=banglore`, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }

// a();



const apikey = "12bfabb7faa480e9f44297d70e571a99";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkw(a) {
    const response = await fetch(apiurl + `&q=${a}` + `&appid=${apikey}`);
    var data = await response.json();


    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    } else {

        console.log(data);

        
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector(".city").innerHTML = a;
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + 'Km/h';



        let ab = document.querySelector(".weather-icon");

        if (data.weather[0].main == "Haze") {
            ab.src = "/cloudy.png";
        }
        else if (data.weather[0].main == "Rain") {
            ab.src = "/storm.png";
        }
        else if (data.weather[0].main == "Clouds") {
            ab.src = "/cloud.png";
        }
        else if (data.weather[0].main == "Snow") {
            ab.src = "/snow.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            ab.src = "/drizzle.png";
        }
        else if (data.weather[0].main == "Snow") {
            ab.src = "/snow.png";
        }
        else if (data.weather[0].main == "Clear") {
            ab.src = "/sun.png";
        }
        else if (data.weather[0].main == "Mist") {
            ab.src = "/mist.png";
        }
        else if (data.weather[0].main == "Fog") {
            ab.src = "/fog.png";
        }
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

sub.addEventListener('click', () => {
    checkw(cname.value);
})  