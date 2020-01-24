const clockContainer= document.querySelector(".js-clock");  //지정된 클래스의 하위 원소를 가져와서 변수에 저장
const clockTitle= clockContainer.querySelector("h1"); // (클래스 내 하위 원소에서 h1 클래스를 가져와 변수에 저장

function getTime(){
  const date= new Date();
  const minutes= date.getMinutes();
  const hours= date.getHours();
  clockTitle.innerText= `${hours}:${minutes}`;
}

function init(){
  getTime();
}

init();
