const form= document.querySelector(".js-form"),
 input= form.querySelector("input"),
 greeting= document.querySelector(".js-greetings");

 const USER_LS= "currentUser",
  SHOWING_CN= "showing";

  function askForName(){
    form.classList.add(SHOWING_CN);
  }

 function paintGreeting(text){  //
     form.classList.remove(SHOWING_CN); //유저이름에 색을 안칠할 꺼면 우리는 상자를 지워야해 = 쇼잉의 이벤트 리스트를 받아서 삭제
     greeting.classList.add(SHOWING_CN);   //쇼잉이란 이벤트를 추가 greeting 오프젝트에
     greeting.innerText= `Hello  ${text}`;
 }

 function loadName(){
    const currentUser= localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } 
    else{
        paintGreeting(currentUser);
    }
 }

 function init(){
    loadName();
 }

 init();
