const sizeWin = window.outerWidth; 

function sizeWinF(){    
    if(sizeWin < 200){   //파랑
        document.body.style.backgroundColor= "blue";
    /*}else if(300< sizeWin < 450){  //보라
        document.body.style.backgroundColor="purple";*/
    }else{  //노랑
        document.body.style.backgroundColor="yellow";
    }
}

const color=["blue, purple, yellow"];
const bgcolorChanger={
    bgColor ()
}
function bgColor(){
    document.body.style.backgroundColor=color[0];
}
window.addEventListener("resize", sizeWinF);