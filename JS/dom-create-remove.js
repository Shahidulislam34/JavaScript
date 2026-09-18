var myDiv = document.querySelector("#createElement");
var myHeader1 = document.querySelectorAll("#createElement h1")[0];
var myHeader2 = document.querySelectorAll("#createElement h2")[0];

//add new properties:
myHeader1.style.color = "blue";
myHeader1.style.fontSize = "2rem";

//create element:
var newElement = document.createElement("h2");
var text = document.createTextNode("We attended from MBSTU");
newElement.appendChild(text);

// কোনো element-কে একই সময়ে একাধিক position-এ add করা যায় না।
// করলে শেষেরটিই কাজ করে, কারণ element-টি এক position থেকে অন্য position-এ move হতে থাকে। তাই শেষ position-এ গিয়ে থেমে যায়।

myDiv.insertBefore(newElement, myHeader1);//insert newElement before myHeader1
myDiv.appendChild(newElement);//insert newElement in last position


//delete element:
myDiv.removeChild(myHeader2);


//Class list: try by writing into console
myDiv.classList;
myDiv.classList.add("class2");
myDiv.classList;
myDiv.classList.remove("class2");
