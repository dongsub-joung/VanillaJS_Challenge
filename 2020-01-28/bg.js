// 랜덤 숫자 생성, 이미지 원소를 생성, background로 설정

const body= document.querySelector("body"); //html의 body태그를 변수body에 저장


function painImage(imgNumber){
    const image= new Image();
    image.src= `image/${imgNumber +1}.jpg`; //이미지를 참조함
    image.classList.add(`bgImage`);
    body.prepend(image);    //body의 하위 원소에 생성한 imgae object의 원소를 추가
}

const IMG_NUMER= 3;
function genRandom(){   //랜덤한 숫자를 생성하고 리턴하는 함수
    const number= Math.floor(Math.random()* IMG_NUMER); 
    return number;
}

function init(){
    const randomNumber= genRandom(); //랜덤하게 숫자를 형성시키는 함수를 실행시킨 값을 변수에 넣음
    painImage(randomNumber);
}

init();