const form= document.querySelector(".js-form"),
 input= form.querySelector("input");
 const pending= document.querySelector(".pending");
 const pending_LS= "PENDING";
 let pendingAry= []; 
 let finishedAry= [];
 
 const finished_CL= document.querySelector(".finished"),
finishedList= document.querySelector(".finishedList");


function deletPending(){
    const btn= event.target;    //이벤트의 적확한 좌표=id에 해당하는
    const li= btn.parentNode;   //btn의 하위 원소를 li를
    pendingList.removeChild(li);    //삭제함
    const cleanPending= pendingAry.filter(function(pending){
        return pending.id !== parseInt(li.id);
    });
    pendingAry= cleanPending;
    savePending();
}

function finished(){
    const btn= event.target;
    
}


 //(submit한 value값)=text를 받아서 html에 프린트
 const pendingList= document.querySelector(".pendingList");

 function listPainting(text){
    const li= document.createElement("li"); //태그를 만들고
    const delBtn= document.createElement("button");
    const moBtn= document.createElement("button");
    delBtn.innerText= "❌"; //value값을 넣음
    delBtn.addEventListener("click", deletPending);
    moBtn.innerText="✔";
    moBtn.addEventListener("click", finished);
    const span= document.createElement("span");
    span.innerText= text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(moBtn);
    //선택 시킬 필요성이 있음
    pendingList.appendChild(li);
    finishedList.appendChild(li);

    const newId= pendingAry.length + 1;
    li.id= newId;   //배열의 원소 수+1을 id값으로 삼음
    const pObj= {
        text: text,
        id: newId
    };
    //선택 시킬 필요성이 있음
    pendingAry.push(pObj);
    
    savePending();
 }

 function savePending(){
    localStorage.setItem(pending_LS, JSON.stringify(pendingAry));
 }
 

 // submit이벤트를 막고 입력된 text를 html에 삽입
function handleSubmit(){
    event.preventDefault();
    const currentValue= input.value;
    listPainting(currentValue);
}

//submit한 value값을 localstorage에서 받아오기 그리고 그 값을 프린트하기
 function load(){
    const vla= localStorage.getItem(pending_LS);
    if(vla !== null){
        const parsePending= JSON.parse(vla);
        parsePending.forEach(function(pending) {
            listPainting(pending.text);
        }
        );
    }
 }

function init(){
    form.addEventListener("submit",handleSubmit);
    load();
}
init();