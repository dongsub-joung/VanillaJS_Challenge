const clock= document.querySelector(".clock");
 
 //get the time
 const present= new Date().getTime();
 const christmasEve= new Date("2020/12/25 24:00:00").getTime();
 let substraction= christmasEve - present;

 function timer(){
     const day=Math.floor(substraction / (1000*60*60*24)); 
     const hours= Math.floor((substraction % (1000*60*60*24)) / (1000*60*60)), 
      min= Math.floor((substraction % (1000*60*60)) / (1000*60)), 
      sec= Math.floor((substraction % (1000*60) / 1000));

      clock.innerHTML=`${day < 10 ? `0${day}` : day}d ${hours < 10 ? `0${hours}` : hours}h ${min < 10 ? `0${min}` : min}m ${sec < 10 ? `0${sec}` : sec}s`;
      
      if(substraction < 0){
        clearInterval(`init()`);
      } else{
        substraction = substraction-1000;
      }
 }

function init(){
    setInterval(`timer()`, 1000);
}

init();