let clock= document.querySelector(".clock");

let clockSec= document.querySelector("#clockSec");
function getDate(){
    let toDay= new Date();
    let hours= toDay.getHours(),
     min= toDay.getMinutes(),
     sec= toDay.getSeconds();
    clock.innerHTML= `
        ${hours < 10 ? `0${hours}` : hours}
        : ${min < 10 ? `0${min}` : min}
    `
    clockSec.innerHTML = `:${sec < 10 ? `0${sec}` : sec}`
}

setInterval(getDate, 1000);