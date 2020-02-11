const toDoForm= document.querySelector(".toDoForm");
const formInput= toDoForm.querySelector("input");

let toDoListArry= [];

function handleSubmit(event){   //값이 입력되면 기본 이벤트롤 막고, 입력값을 저장하고, 출력
    event.preventDefault();
    const currentVal= formInput.value;
    paintList(currentVal);
    formInput.value= "";
}

const toDoViewer= document.querySelector(".toDoViewer");

function paintList(text){   //입력값을 저장
    const li= document.createElement("li");
    const span= document.createElement("span");
    const delBtn= document.createElement("button");

    li.style.margin=`12px`;

    delBtn.style.opacity= 0.6   ;
    delBtn.style.fontSize= `28px`;
    delBtn.style.border= `none`;
    delBtn.style.background=`transparent`;
    
    span.style.fontSize=`40px`;
    span.style.fontFamily=`'Times New Roman', Times, serif`;

    delBtn.innerText=" ❌";
    delBtn.addEventListener("click", deleteBtn);
    

    li.appendChild(span);
    li.appendChild(delBtn);
    toDoViewer.appendChild(li);

    const newId= toDoListArry.length +1;
    span.innerText= text;
    li.id= newId;
    const toDoObj={
        text: text,
        id: newId
    };
    toDoListArry.push(toDoObj);
    saveArry();
}

function deleteBtn(event){
    const btnParent= event.target;
    const li= btnParent.parentNode;
    toDoViewer.removeChild(li);

    const cleanList= toDoListArry.filter(function(toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDoListArry= cleanList;
    saveArry();
}

const list_VAL="List";

function loadPreVal(){  //입력되면, 입력값을 저장하고, 출력 그리고 그전에 저장값을 받아와서 /출력
    const getObj= localStorage.getItem(list_VAL);
    if(getObj !== null){
        const getString= JSON.parse(getObj);
        getString.forEach(function(toDo){
        paintList(toDo.text);
        });
    }
}

function saveArry(){  //배열에 저장, 오브젝트로
    localStorage.setItem(list_VAL, JSON.stringify(toDoListArry));
}

function init(){
    loadPreVal();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();