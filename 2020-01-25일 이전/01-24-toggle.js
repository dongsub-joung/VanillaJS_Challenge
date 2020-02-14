const title = document.querySelector("#title");

const CLICKED_CLASS= "clicked"; //css에서 파랑색으로 바꾸라는 선언이 담긴 클래스를 변수에 담음 

function handleClick(){
  title.classList.toggle(CLICKED_CLASS);
}

function init(){    //클릭할시에 이벤트 발생
    title.addEventListener("click",handleClick); 
}

init(); //함수 실현
