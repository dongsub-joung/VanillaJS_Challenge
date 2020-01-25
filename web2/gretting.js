const form= document.querySelector(".js-form"),
 input= form.querySelector("input"),
 greeting= document.querySelector(".js-greetings");

 const USER_LS= "currentUser",
  SHOWING_CN= "showing";

  function saveName(text){  //입력받은 값을 저장함
    localStorage.setItem(USER_LS, text);    //value값을 입력받은 값으로 저장함.
  }

  function handleSubmit(event){ //submit 기본 이벤트(새로고침)을 막고 현재 value을 집어넣음
      event.preventDefault();
      const currentValue= input.value;
      paintGreeting(currentValue);  //그리고 form에서 이벤트를 삭제하고, greeting에 추가
      saveName(currentValue);
  }

  function askForName(){    //이름을 묻는 함수
    form.classList.add(SHOWING_CN); //화면을 블록값으로 표시하는 쇼잉을 form에 추가
    form.addEventListener("submit", handleSubmit);  //
  }

 function paintGreeting(text){  //헬로 + 텍스트(사용자이름)을 받아서 추가하는 함수
     form.classList.remove(SHOWING_CN); //유저이름에 색을 안칠할 꺼면 우리는 상자를 지워야해 = 쇼잉의 이벤트 리스트를 받아서 삭제
     greeting.classList.add(SHOWING_CN);   //쇼잉이란 이벤트를 추가 greeting 오프젝트에
     greeting.innerText= `Hello  ${text}`;  //텍스트 추가
 }

 function loadName(){   //사용자가 비어있다면 사용자의 이름을 묻는 함수를 호출하고 사용자가 있다면 이름에 색칠 
    const currentUser= localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } 
    else{
        paintGreeting(currentUser);
    }
 }

 function init(){   //시작을 알리는 함수
    loadName();
 }

 init();    //동작