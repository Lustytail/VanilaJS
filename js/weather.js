
const glocation = document.querySelector(".geolocation");
const weather = document.querySelector(".weather");

const API_KEY = "18a6dcd07863ff4d2fe9dfee3576431d";

function setInfo(a, geolocation) {
    weather.innerText = a;
    glocation.innerText = `You're in ${geolocation}`;
}

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    fetch(url).then(response => response.json()).then(data => {
        
        setInfo(data.weather[0].description, data.name);
        localStorage.setItem("weather", data.weather[0].description);
        localStorage.setItem("geolocation", data.name);
    });
}

function onGeoError() {
    alert("I can't find you.");
}

if(localStorage.getItem("weather") !== null && localStorage.getItem("geolocation") !== null) {
    setInfo(localStorage.getItem("weather"), localStorage.getItem("geolocation"));
}else {
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}

