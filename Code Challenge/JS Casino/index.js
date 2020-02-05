const numberId= document.getElementById("numberId"),
playId= document.getElementById("playId"),
selectedNum= document.querySelector(".selectedNum"),
rangeInterface= document.querySelector(".rangeInterface");

const numberKey="NUMBER"

//숫자를 랜덤으로 생성
function createNumber(){
    Math.floor(Math.random()*130);
}

function saveNumber(num){
    localStorage.setItem(numberKey, `${num}`);
}

//숫자 입력받기
const numberClass= document.querySelector(".numberClass");
function inputNumber(){
    const num= document.getElementById("numberId").value;
    numberClass.addEventListener("submit", saveNumber(num));
}



function init(){
    console.log(saveNumber());
}

init();