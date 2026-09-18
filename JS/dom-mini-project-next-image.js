var photos = ["Data/bird1.webp", "Data/bird2.webp", "Data/bird3.webp"];

var num = 0;
var myImage = document.querySelector("#next-previous-image");

function prev(){
    --num;
    if (num < 0) num = photos.length - 1;
    myImage.src = photos[num];
}

function next(){
    ++num;
    if (num >= photos.length) num = 0;
    myImage.src = photos[num];
}


