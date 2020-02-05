//pending 관련 변수 선언
const form= document.querySelector(".js-form"),
 input= form.querySelector("input");
 const pending= document.querySelector(".pending");
 const pending_LS= "PENDING";
let pendingAry= []; 

//finish 관련 변수 선언
 const finished_CL= document.querySelector(".finished"),
finishedList= document.querySelector(".finishedList");
let finishedAry= [];

 
function finished(){
    deletPending();
    const btn= event.target;
    
}

function deletPending(){
    const btn= event.target;    
    const li= btn.parentNode;  
    pendingList.removeChild(li);  
    const cleanPending= pendingAry.filter(function(pending){
        return pending.id !== parseInt(li.id);
    });
    pendingAry= cleanPending;
    savePending();
}

const pendingList= document.querySelector(".pendingList");
function paint(text){
    if(text === pending_LS){
        localStorage.setItem(pending_LS, text);
        pending.innerHTML= `${text}`;
    }else{
        localStorage.setItem(finished_LS, text);
        finished.innerHTML= `${text}`;
    }
}

function listPainting(text){
    const li= document.createElement("li"); 
    const delBtn= document.createElement("button");
    const moBtn= document.createElement("button");
    delBtn.innerText= "❌"; 
    delBtn.addEventListener("click", deletPending);
    moBtn.innerText="✔";
    //키값을 변경시키는 함수가 필요함
    moBtn.addEventListener("click", finished);
    const span= document.createElement("span");
    span.innerText= text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(moBtn);
    //선택 시킬 필요성이 있음
    const keyVal= localStorage.getItem(pending_LS);
    const keyParse= JSON.parse(keyVal);
    if(keyParse === "PENDING") {
        pendingList.appendChild(li);
        const newId= pendingAry.length + 1;
        li.id= newId;
        const pObj= {
            text: text,
            id: newId
        };
    } 
    else {
        moBtn.innerText="🔙";
        moBtn.addEventListener("click", finished);
        finishedList.appendChild(li);
        const newIdF= finishedList.length+ 1;
        li.id= newIdF;   
        const fObj= {
            text: text,
            id: newIdF
        };
    }
    
    //선택 시킬 필요성이 있음
    pendingAry.push(pObj);
    finishedAry.push(pObj);
    savePending();
    saveFinished();
}

function savePending(){
    localStorage.setItem(pending_LS, JSON.stringify(pendingAry));
}
function saveFinished(){
    localStorage.setItem(finished_LS, JSON.stringify(finishedAry));
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