

let myButton = document.querySelector("#event-listener");
// myButton.addEventListener("click", showAlert);//without 1st bracket

// function showAlert(){
//     alert("This is Event Listener");
// }

//using anonymous function:
myButton.addEventListener("click", function(){
    alert("This is Event Listener");
});

let myMouse = document.querySelector("#mouse-over-out");

myMouse.addEventListener("mouseover", function(){
    myMouse.classList.add("mouse-over-out");
});
myMouse.addEventListener("mouseout", function(){
    myMouse.classList.remove("mouse-over-out");
});
