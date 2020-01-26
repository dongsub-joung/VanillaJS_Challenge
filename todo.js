const toDoForm =document.querySelector(".js-toDoForm");
const toDoInput= toDoForm.querySelector("input");
const toDoList= document.querySelector(".js-toDoList");

 const TODOS_LS= "toDos";   //로컬스토레이지 매개 변수 =넣을 변수의 값 


 function paintToDo(text){ //현재값을 할당받아서 toDoInput변수에 영향을 미침
   const li= document.createElement("li");   //li 생성
   const delBtn= document.createElement("button"); //button 생성
   delBtn.innerText="❤";   
   const span= document.createElement("span");  //span 생성
   span.innerText= text;   //받은 변수를 생성한 span에 텍스트로 넣음
   li.appendChild(span);   // li안에 span을 넣음 
   li.appendChild(delBtn); //li안에 delBtn을 넣음 순서가 상관있음
   toDoList.appendChild(li);
 }

 function handleSubmit(event){
    event.preventDefault(); //초기화를 막음
    const currentValue= toDoInput.value; // todoinput의 value값을 변수에 저장
    paintToDo(currentValue);    //위에 저장한 value값에 paint하는 함수를 적용
    toDoInput.value=""; //엔터를 눌렀을 때 todo생성, 삭제
 } 

 function loadToDos(){  
     const toDos= localStorage.getItem(TODOS_LS);   //변수에 포함되어진 지역 변수를 조회함
    if(toDos !== null){
    }
 }

 function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);   //=웹에서 무언가 submit할때는 초기화를 막는 것을 해주어야 하는구나
 }

 init();
