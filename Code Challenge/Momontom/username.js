
//paint
const nameForm= document.querySelector(".nameForm"),
 input= document.querySelector("input"), 
 nameViewer= document.querySelector(".nameViewer");

const userName_CN="showing";

const html= document.querySelector("html");
function paint(text){   //키값이 입력된 후/  키값이 있는지 확인하고 있으면 기존 값을 불러와서 출력
    nameForm.classList.remove(userName_CN);
    nameViewer.classList.add(userName_CN);   
    nameViewer.innerHTML= `Hi ${text}!`;
}

const on= document.querySelector(".on");



function handleSubmit(event){   //입력값이 입력된 후 실행됨. 값을 저장하고, 출력함 이건 기존 값이 없어야 실행됨
    event.preventDefault();
    const currentVal = input.value;
    paint(currentVal);
    saveVal(currentVal);
}

function saveVal(currentVal){   //입력된 값을 저장
    localStorage.setItem(`User`, currentVal);
}

function load(){  //이함수가 필요할 때는 기존 값이 존재할 때. 그리고 존재하면 기존 값을 불러와서 페인트 아니면 입력값을 받아야함
    let currentVal= localStorage.getItem("User");
    if(currentVal !== null){    //기존 값이 존재하면
        paint(currentVal);
    } else {
        askName();
    }
}

function askName(){ //입력밧을 받기 위해서 창을 띄움 이것은 기존 값이 없어야 가능
    nameForm.classList.add(userName_CN);
    nameForm.addEventListener("submit", handleSubmit);
}

function init(){
    load();
}

init();