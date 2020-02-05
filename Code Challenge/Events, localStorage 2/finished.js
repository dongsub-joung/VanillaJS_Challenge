let finished_CL="FINISHED",
 finishedAry= [];
 const finished= document.querySelector(".finished"),
finishedList= document.querySelector(".finishedList");

function listPainting(text){
    const li= document.createElement("li"); 
    const delBtn= document.createElement("button");
    const moBtn= document.createElement("button");
    delBtn.innerText= "❌"; 
    delBtn.addEventListener("click", buttonEvent.deletFinished);
    moBtn.innerText="🔙";
    delBtn.addEventListener("click", buttonEvent.moveTask); //함수 정의 아직임
    const span= document.createElement("span");
    span.innerText= text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.appendChild(moBtn);
    //dif
    finishedList.appendChild(li);
    const newId= finishedAry.length + 1;
    li.id= newId;
    const pObj= {
        text: text,
        id: newId
    };
    finishedAry.push(pObj);
    saveFinished();
 }

 const buttonEvent={
    deletFinished: function (){
        const btn= event.target;
        const li= btn.parentNode;  
        finishedList.removeChild(li);  
        const cleanFinished= finishedAry.filter(function(finished){
            return finished.id !== parseInt(li.id);
        });
        finishedAry= cleanFinished;
    },
    moveTask: function(){
        
    }
};

 function saveFinished(){
    localStorage.setItem(finished_CL, JSON.stringify(finishedAry));
 }
 
 function load(){
    const vla= localStorage.getItem(finished_CL);
    if(vla !== null){
        const parseFinished= JSON.parse(vla);
        parseFinished.forEach(function(finished) {
            listPainting(finshed.text);
        }
        );
    }
 }

function init(){    
    load();
}

init();



/*아마 finished에선 필요 없음
function handleSubmit(){
    event.preventDefault();
    const currentValue= input.value;
    listPainting(currentValue);
} */