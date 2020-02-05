const form= document.querySelector(".js-form"),
 input= form.querySelector("input");

 const pending= document.querySelector(".pending"),
 finished= document.querySelector(".finished");

 const pending_LS= "PENDING",
  finished_LS= "FINISHED";

// submit이벤트를 막고
function handleSubmit(){
    event.preventDefault();
    const currentValue= input.value;
    paint(currentValue);
}


//입력받은 text를 문자의 형태로 삽입
function paint(text){
    if(text === pending_LS){
        localStorage.setItem(pending_LS, text);
        pending.innerHTML= `${text}`;
    }else{
        localStorage.setItem(finished_LS, text);
        finished.innerHTML= `${text}`;
    }
}


//입력받은 키를 받아와서 존재하면 문자의 형태로 삽입
function loadPending(){
    const currentUserP=localStorage.getItem(pending_LS);
}
function loadFinished(){
    const currentUserF=localStorage.getItem(finished_LS);
}


 function init(){
    form.addEventListener("submit",handleSubmit);
 }

 init();