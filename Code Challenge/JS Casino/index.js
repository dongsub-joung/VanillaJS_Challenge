
const machineInput= document.getElementById("machineInput"),
 playId= document.getElementById("playId"),
 sliderValueView= document.getElementById('sliderValueView'),
 rangeScroll= document.getElementById(`rangeScroll`),
result= document.getElementById("result"), 
 form= document.querySelector("form"),
 userInput= document.getElementById("userInput"),
 numberId= document.getElementById("numberId");

const show= document.querySelector(".show"),
 showTwo= document.querySelector(".showTwo"); 


function handleSubmit(e){
    e.preventDefault();
    inputUser();
    show.classList.add("on");
}

function inputUser(){   //입력받은 값 출력
    userInput.innerHTML= numberId.value;
}

function createNumber(){
    let choseM= Math.floor(Math.random()*rangeScroll.value+1);  //숫자 생성
    machineInput.innerHTML= choseM;    //출력
    showTwo.classList.add("on");

    if( numberId.value == choseM){
        result.innerText=`U Win`;
    } else{
        result.innerText=`U rose`;
        result.style.textAlign=`right`;
        result.style.fontSize=`80px`
    }
}

function scroll(){ 
    rangeScroll.setAttribute("oninput", "sliderValueView.innerHTML=rangeScroll.value");
}

function init(){
    form.addEventListener("submit", handleSubmit); 
    playId.addEventListener("click", createNumber);
    scroll(); 
}

const audio= document.querySelector("audio");
audio.volume=0.3


init();