const sizeWin = window.outerWidth; 

const bgColor={
    one: function() {
        document.body.style.backgroundColor= "blue";
    },
    two: function() {
        document.body.style.backgroundColor="purple";
    },
    three: function() {
        document.body.style.backgroundColor="yellow";
    }
};

const val={
    mini: function() {
        window.addEventListener("resize", bgColor.one);
    },
    midle: function() {
        window.addEventListener("resize", bgColor.two);
    },
    max: function() {
        window.addEventListener("resize", bgColor.three);
    }
};

if(sizeWin < 250){
    val.mini();
} else if(251 < sizeWin < 500){
    val.midle();
} else {
    val.max();
}