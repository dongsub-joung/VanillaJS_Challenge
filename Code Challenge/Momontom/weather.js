const weather= document.querySelector(".weather");

const API_KEY= "0621aa6fcfa11ddbca0e493107ec7d6d";
const Weather_Val="Weather";

function handleGeo(position){   
    const latitude= position.coords.latitude;
    const longitude= position.coords.longitude;
    const crdObj={
        latitude,
        longitude
    };
    save(crdObj);
    getWeather(latitude, longitude);
}

function getWeather(latitude, longitude){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
    .then(response=> {
        return response.json();
    }).then(json => {
        const temperatuer= json.main.temp;
        const place= json.name;
        weather.innerText=`${temperatuer}℃  in ${place}`;
    });
}

function save(crdObj){
    localStorage.setItem(Weather_Val, JSON.stringify(crdObj));
}

function load(url){
    const key= localStorage.getItem(Weather_Val);
    if(key !== null){
        const loadWeather= JSON.parse(key);
        getWeather(loadWeather.latitude, loadWeather.longitude);
    } else{
        askGeo();
    }
}

function askGeo(){
    navigator.geolocation.getCurrentPosition(handleGeo, handleError);
}

function handleError(){
    console.log(`cant access geo location`);
}

function init(){
    load();
}

init();