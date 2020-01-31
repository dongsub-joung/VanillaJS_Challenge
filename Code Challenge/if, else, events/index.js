const sizeWin = window.outerWidth; 

function sizeWinF(){    
    if(sizeWin < 200){   //파랑
        window.addEventListener("resize", one);
    }if(300< sizeWin < 450){  //보라
        window.addEventListener("resize", two);
    }else{  //노랑
        window.addEventListener("resize", three);
    }
}
window.addEventListener("resize", sizeWinF);

function one(){
    document.body.style.backgroundColor= "blue";
}
function two(){
    document.body.style.backgroundColor="purple";
}
function three(){
    document.body.style.backgroundColor="yellow";
}