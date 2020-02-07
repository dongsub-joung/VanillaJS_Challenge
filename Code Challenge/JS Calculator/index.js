const calculator= document.getElementById("calculator");
/*
function add(num){
    calculator.value= calculator.value + num;
}
*/
let tOf= false; // 2번 연속 연산자면 1, 아니면 0
let tofCount=0;
function add(num){
//input이 숫자인지 문자인지 판별
    if(isNaN(num) == true){
        tofCount++;     //2연속 연산자면 0으로
    } else{ 
        tofCount=0;
    }

    if(tofCount > 1){
        return tof=true;
    } 

    if(tOf == false){
        claculation(num);
        calculator.value= eval(calculator.value);
    } else {    //2연속 연산자면
        return;
    }
}

function claculation(num){
    calculator.value += num;
}

function overlap(num){
    
} 

const equals= document.getElementById("equals");
function result(){
    calculator.value= eval(calculator.value);
}

function reset(){
    calculator.value="";
}

