const toDoForm =document.querySelector(".js-toDoForm");
const toDoInput= toDoForm.querySelector("input");
const toDoList= document.querySelector(".js-toDoList");

 const TODOS_LS= "toDos";   //로컬스토레이지 매개 변수 =넣을 변수의 값 
 let toDos=[];

/*
 = const cleanToDos= toDos.filter(filterFn); 
 
 function filterFn(toDo){ //array을 하나 만드는 함수
    return toDo.id === 1;
 } //cleanTodos와 filter가 하는 것은 filterFn이 체크가 된 아이템들의 array를 주는 것
*/

 function deleteToDo(event){ //html part를 지우는 함수
   /*console.log(event.target.parentNode);
   어떤 버튼이 눌렸는지 알아야 함=그래야 지울 수 있음. 그런데 이 경우father가 모름
   */
   const btn= event.target;  //event를  
   const li= btn.parentNode;  //btn의 부모노트를 li에 저장
   toDoList.removeChild(li);  //위의 li변수의 toDoList의 아래 자식을 삭제
   const cleanToDos= toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
   }); //filter는 함수하나를 실행시킴 그리고 true인것들인 toDos만 return
   toDos= cleanToDos; //전 것 < 새것
   saveToDos(); //저장
  } 
 
 
 function saveToDos(){  //배열을 저장해주는 함수
   localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
   //jsscript의 object를 string으로 바꿔줌
 }

 function paintToDo(text){ //현재값을 할당받아서 toDoInput변수에 영향을 미침
   const li= document.createElement("li");   //li 생성
   const delBtn= document.createElement("button"); //button 생성
   delBtn.innerText="❤"; 
   delBtn.addEventListener("click",deleteToDo); //delBtn안에 클릭 이벤트 생성하고 deleteToDo함수 실행 
   const span= document.createElement("span");  //span 생성
   const newId= toDos.length +1;
   span.innerText= text;   //받은 변수를 생성한 span에 텍스트로 넣음
   li.appendChild(span);   // li안에 span을 넣음 
   li.appendChild(delBtn); //li안에 delBtn을 넣음 순서가 상관있음
   li.id= newId;  //배열수+!을 li의 id로 만듬
   toDoList.appendChild(li);
   const toDoObj={ //toDos가 추가되면 배열로서 받음
    text: text,   //입력받은것을 text에 저장
    id: newId  //toDos.length + 1 배열의 수+1 값을 id로 지정
   };
   toDos.push(toDoObj); //배열toDos에 추가된 값과 id 추가
   saveToDos();
 } //이렇게 배열값과 id를 저장하는 이유는 로컬 스토레이지에 저장하기 위해서
 
 function handleSubmit(event){
    event.preventDefault(); //초기화를 막음
    const currentValue= toDoInput.value; // todoinput의 value값을 변수에 저장
    paintToDo(currentValue);    //위에 저장한 value값에 paint하는 함수를 적용
    toDoInput.value=""; //엔터를 눌렀을 때 todo생성, 삭제
 } 

 function loadToDos(){  //사용자를 불러오는 함수
     const loadedTodos= localStorage.getItem(TODOS_LS);   //변수에 포함되어진 지역 변수를 조회함
    if(toDos !== null){
      const parsedToDos=JSON.parse(loadedTodos);
      parsedToDos.forEach(function(toDo){
         paintToDo(toDo.text);
      });
   }
 }

 function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);   //=웹에서 무언가 submit할때는 초기화를 막는 것을 해주어야 하는구나
 }

 init();