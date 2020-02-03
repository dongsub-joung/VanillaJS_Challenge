//js-form,input > class
const form= document.querySelector(".js-form"),
 input= form.querySelector("input");
//pending > class
 const pending= document.querySelector(".pending");
//Key값
 const pending_LS= "PENDING";

 //(submit한 value값)=text를 받아서 html에 프린트
 const pendingList= document.querySelector(".pendingList");
 function listInput(text){
    pending.
    pendingList.innerHTML=`${text}`;
 }

 //submit한 value값을 localstorage에서 받아오기 그리고 그 값을 프린트하기
 function load(){
    const vla= localStorage.getItem(pending_LS);
    listInput(vla);
 }

 // submit이벤트를 막고 입력된 text를 html에 삽입
function handleSubmit(){
    event.preventDefault();
    const currentValue= input.value;
    listInput(currentValue);
}

function init(){
    form.addEventListener("submit",handleSubmit);
}
init();