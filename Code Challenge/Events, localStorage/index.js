//select에서 value 가져오기
const val_LS= "Country"; //기본 key값

function getValue(){
    let e = document.getElementById(`countrySelect`);
    let text = e.options[e.selectedIndex].text;
}

function save(){
    getValue();
    localStorage.setItem(val_LS, text);
}

function loadaa(){
    getValue();
    const currentUser=localStorage.getItem(val_LS);
}


function init(){
    load();
}

init();