const title = document.querySelector("#title");

const CLICKED_CLASS= "clicked"; //css에서 파랑색으로 바꾸라는 선언이 담긴 클래스를 변수에 담음 

function handleClick(){
    const currentClass= title.className; //현재 클래스 이름을 변수화
    if(currentClass!== CLICKED_CLASS){ //현재 클래스 이름이 변수가 아니라면
        title.className= CLICKED_CLASS  //클래스 이름에 변수를 집어넣음
    }
    else{
        title.className= "";    //그렇지 않다면 클래스 이름을 비워둠.
    }
}

function init(){    //클릭할시에 이벤트 발생
    title.addEventListener("click",handleClick);
}

init(); //함수 실현
