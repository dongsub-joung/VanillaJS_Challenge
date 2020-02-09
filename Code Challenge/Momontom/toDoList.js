const toDoForm= document.querySelector(".toDoForm"),
 toDoInput= document.querySelector(".toDoInput");
const formInput= toDoForm.querySelector("input");

let toDoListArry= [];

function handleSubmit(event){   //값이 입력되면 기본 이벤트롤 막고, 입력값을 저장하고, 출력
    event.preventDefault();
    const currentVal= formInput.value;
    saveArry(currentVal);
    paintList(currentVal);
}

const toDoViewer= document.querySelector(".toDoViewer");
function paintList(text){   //입력값을 저장
    toDoViewer.innerHTML= text;
}

function loadPreVal(){  //입력되면, 입력값을 저장하고, 출력 그리고 그전에 저장값을 받아와서 /출력
    formInput.addEventListener("submit", handleSubmit)
    const getObj= localStorage.getItem("List");
    const preVal= JSON.parse(getObj);
    paintList(preVal);
}

function saveArry(currentVal){  //배열에 저장, 오브젝트로
    const setObj= localStorage.setItem("List", currentVal);
    JSON.stringify(setObj);
}

function init(){
    loadPreVal();
}

init();