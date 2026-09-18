var myDiv = document.querySelector("#traversing");
var child1 = myDiv.querySelectorAll("h1")[0];//Only search the childs h1 of myDiv. Not the full document
var child2 = myDiv.querySelectorAll("h1")[1];
var child3 = myDiv.children[2];//similar to previous way

child1.innerHTML = "Child 1";
child1.style.color = "orange";
child3.style.fontSize = "1.5rem";

var nextChild = child1.nextElementSibling;
nextChild.style.color = "blue";

var previousChild = child3.previousElementSibling;


var parent = child1.parentElement;//find parent of child1:#traversing
parent.children[2].style.color = "green";