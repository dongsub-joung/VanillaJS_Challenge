const num= document.querySelectorAll(".num"), //숫자
 multi= document.querySelectorAll(".multi"); //사칙연산,log,루트
const nums= Array.from(num),    //집합으로 간섭 가능?
 multis= Array.from(multi);

let firstValue = "", //string 첫 숫자 값
  firstDone,         //0 or 1 첫 숫자와 연산자 사이 카운트
  secondValue = "",  // 두번째 숫자 값
  secondDone,        // 연산자와 두번째 숫자값 사이 카운트
  currentOperationVal;  //현재 입력 값

const result= document.querySelector(".result");
const reset= document.querySelector(".reset");
 equals= document.querySelector(".equals");

function handleNumberClick(e){
   let clickNumber= e.target.value;
   if(!firstDone){   //첫번째 연산자 입력전이라면
      firstValue += clickNumber; //숫자를 저장
      result.innerHTML= firstValue; //출력
   } else { //연산자 입력 이후 라면
      secondValue += clickNumber;   //두번째 값에 추가
      result.innerHTML= secondValue;   //출력
      secondDone= true; //그리고 조건 카운트 
   }
}

function handleMultiClick(e){
   const operationVal= e.target.value;
   if(!firstDone) {  //첫번째 연산자 입력이면
      firstDone= true;  // ++
   } 
   if(firstDone && secondDone){  //두번째 연산자 입력이면
      calculation(); 
   }

   currentOperationVal= operationVal;  //입력된 값을 전역변수에 저장
}

function calculation(){
   const operation= doOperation();
   result.innerHTML= operation;  //계산 값을 출력하고
   firstValue= operation;  //계산값을 다시 첫번 째 값으로
   secondDone= false;   //두번째 공정 초기화
   secondValue="";   // null
}

function doOperation(){
   const valOne= parseInt(firstValue, 10);   //string > 10진수 number
   const valTwo= parseInt(secondValue, 10);

   switch(currentOperationVal){
      case "+": 
         return valOne+valTwo;
      case "-":
         return valOne-valTwo;
      case "*":
         return valOne*valTwo;
      case "/":
         return valOne/valTwo;
      case "log":
         if(!valOne == null)return Math.log(valOne);
         else return Math.log(valTwo);
      case "√":
         if(!valOne==null) return Math.sqrt(valOne);
         else return Math.sqrt(valTwo);
      case "^":
         return Math.pow(valOne,valTwo);
      default:
         return;
   }
}


function handleReset(){
   firstValue="";
   secondvalue="";
   currentOperationVal=null;
   result.innerHTML="0";
   firstDone= false;
   secondDone= false;
}

function handleEquals(){
   if( firstDone && secondDone ){
      calculation();
   }
}

nums.forEach(function(numval){
   numval.addEventListener("click", handleNumberClick);
});
multis.forEach(function(multiVal){
   multiVal.addEventListener("click", handleMultiClick);
});
reset.addEventListener("click", handleReset);
equals.addEventListener("click", handleEquals);