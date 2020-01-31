const body= document.querySelector("body");

function painImage(){
    const image=new Image();
    image.src= `1.jpg`;
    image.classList.add(`bgImage`);
    body.prepend(image);
}

painImage();