const h1= document.querySelector("#h1");


function colorIn(){
    h1.style.color="Green";
    stringChange("The muse is here!");
}

function colorOut(){
    h1.style.color="red";
    stringChange("The muse is gone!");
}

function colorSize(){
    h1.style.color="blue";
    stringChange("U just resized!");
}

function colorclick(){
    h1.style.color="yellow";
    stringChange("That was a right click!");
}

function stringChange(stringVar){
    h1.innerHTML= `${stringVar}`;
}

function mouseIn(){
    h1.addEventListener("mouseenter", colorIn);
}

function mouseOut(){
    h1.addEventListener("mouseleave", colorOut);
}

function winSize(){
    window.addEventListener("resize",colorSize);
}

function rightClick(){
    document.addEventListener("contextmenu", colorclick);
}

function init(){
    mouseIn();
    mouseOut()
    winSize();
    rightClick();
}

init();