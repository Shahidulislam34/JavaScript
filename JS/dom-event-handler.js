
function clickButton1(){
    document.querySelector("#button1").innerHTML = "Successfully Clicked Button 1";
}

function clickButton2(){
    document.querySelector("#button2").innerHTML = "Successfully Clicked Button 2";
}

let myVar = document.querySelector("#picture");
function showPicture1(){
    myVar.src = "Data/shourov.jpg";
    myVar.style.display = "block";
}
function showPicture2(){
    myVar.src = "Data/icpc.jpg";
    myVar.style.display = "block";
}