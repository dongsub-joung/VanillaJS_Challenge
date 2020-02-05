
//컴퓨터가 랜덤으로 숫자생성
const machineInput= document.getElementById("machineInput");
function createNumber(){
    let choseM= Math.floor(Math.random()*rangeScroll.value+1);
    machineInput.innerHTML= `${choseM}`;
    const M=  `${choseM}`;
    return `${M}`;
}

//유저에게 숫자 입력받기
const userInput= document.getElementById("userInput");
function inputUser(){
    let numberIdVal= document.getElementById("numberId").value;
    userInput.innerHTML= `${numberIdVal}`;
    const U= `${numberIdVal}`;
    return U;
}

//두 수의 비교
const result= document.getElementById("result");
function compare(){
    if( userInput === machineInput){
        result.innerText=`U Win`;
    } else{
        result.innerText=`U rose`;
    }
}

//submit x 
const form= document.querySelector("form");
function handleSubmit(e){
    e.preventDefault();
    inputUser();
}

const sliderValueView= document.getElementById('sliderValueView');
const rangeScroll= document.getElementById(`rangeScroll`);
function scroll(){ //확정
    rangeScroll.setAttribute("oninput", "sliderValueView.innerHTML=rangeScroll.value");
}

const playId= document.getElementById("playId");
function init(){
    form.addEventListener("submit", handleSubmit); //확정
    playId.addEventListener("click", createNumber);
    scroll(); //확정
    createNumber(); //비교
    inputUser()
}

init();


/*
const numberKey="NUMBER"

function saveNumber(num){
    localStorage.setItem(numberKey, `${num}`);
}
*/