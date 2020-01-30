const weather= document.querySelector(".js-weather");
const API_KEY= "0621aa6fcfa11ddbca0e493107ec7d6d";
const COORDS=`coords`;

function getWeather(lat, lng){  
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response) {
        return response.json();
    }).then(function(json){
        const temperatuer= json.main.temp;  //console.log에서 정보를 찾아서 id를 찾아옴
        const place= json.name;
        weather.innerText=`${temperatuer} @ ${place}`;  
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

//getCurrentPosition requierment function start
function handleGeoSucces(position){
    const latitude= position.coords.latitude;
    const longitude= position.coords.longitude;
    const coordsObj={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(position){
    console.log(`cant access geo location`);
}                                               //getCurrentPosition end

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError)
}

function loadCoords(){
    const loadedCoords= localStorage.getItem(COORDS); //=coords
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords= JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();   //좌표를 요청하는 함수를 만들어보자
}

init();