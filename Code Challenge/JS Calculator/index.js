const calculator= document.getElementById("calculator");
/*
function add(num){
    calculator.value= calculator.value + num;
}
*/
let tOf= false; // 2번 연속 연산자면 1, 아니면 0
function add(num){
    if(tOf === false){
        if( overlap(num) === true){

        } else {
            calculator.value += num;
            calculator.value= eval(calculator.value);
        }
    }else{
        calculator.value += num;
        calculator.value= eval(calculator.value);
    }
}
const multi= document.querySelector(".multi");
console.log(multi);

function overlap(num){
    if(num == String){
        tOf= true;
    } else{ 
        tOf= false;
    }
} 
/*
function turnOf(){
    return tOf=false;
}
*/
const equals= document.getElementById("equals");
function result(){
    calculator.value= eval(calculator.value);
}

function reset(){
    calculator.value="";
}