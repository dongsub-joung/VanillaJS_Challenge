const calculator= document.getElementById("calculator"),
 equals= document.getElementById("equals");

let tOf= false, // 2번 연속 연산자면 1, 아니면 0
 tofCount=0;

function add(num){  //input이 숫자인지 문자인지 판별
    if(isNaN(num) == true){
        tofCount++;     //2연속 연산자면 0으로
    } else{ 
        tofCount=0;
    }

    if(tofCount > 1){
        return tOf=true;
    } 

    if(tOf == false){
        claculation(num);
    } else { 
        return;
    }
}

function claculation(num){
    if(isNaN(num) === 1){
        return;
    } else{
        calculator.value += num;
    }
}


function result(){
    calculator.value= eval(calculator.value);
}

function reset(){
    calculator.value="";
}