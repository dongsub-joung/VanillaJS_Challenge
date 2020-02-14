const title = document.querySelector("#title");

const CLICKED_CLASS= "clicked"; //css에서 파랑색으로 바꾸라는 선언이 담긴 클래스를 변수에 담음 

function handleClick(){
    const hasclass= title.classList.contains(CLICKED_CLASS);

    if(hasclass){ //현재 클래스 이름이 변수가 아니라면
        title.classList.remove(CLICKED_CLASS); //변수에 저장된 값을 claaName에 add
    }
    else{
        title.classList.add(CLICKED_CLASS);  //변수 클래스를 삭제함
    }
}

function init(){    //클릭할시에 이벤트 발생
    title.addEventListener("click",handleClick); 
}

init(); //함수 실현
