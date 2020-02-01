//select에서 value 가져오기
var e = document.getElementById(`countrySelect`);
var text = e.options[e.selectedIndex].text;


const val_LS= "Country"; //기본 key값

function save(text){
    localStorage.setItem(val_LS, text);
}

function load(){
    const currentUser=localStorage.getItem(val_LS);
}

function init(){
    const df= "--Choose an country--";
    if(text === df && text === null){
        save();
    } else {
        load();
    }
}

init();