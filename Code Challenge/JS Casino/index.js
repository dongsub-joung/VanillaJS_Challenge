const numberId= document.getElementById("numberId"),
playId= document.getElementById("playId");


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


let rangeScroll= document.getElementById("rangeScroll").value

let selectedNum= document.querySelector(".selectedNum");
/*
function scroll(){
    rangeScroll.addEventListener("change", changeRange);
}
*/

function changeRange(rangeScroll){
    selectedNum =`Generate a number beween 0 and ${rangeScroll}`;
    return selectedNum.textContent;
}


function init(){
    scroll();
    changeRange(rangeScroll);
}

init();