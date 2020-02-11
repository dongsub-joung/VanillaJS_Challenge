const body= document.querySelector("body");




function inputBg(num){
    const image= new Image();
    image.src= `image/${num+1}.jpg`;
    image.classList.add(`bgImage`);
    body.prepend(image);
}

const ImgNum=6;
function generageNum(){
    const ran= Math.floor(Math.random()*ImgNum);
    return ran;
}

function init(){
    const num= generageNum();
    inputBg(num);
}

init();