var myStyle = document.querySelector("#change-style")

function changeStyle(){
    // myStyle.style.color = "Orange";
    // myStyle.style.fontSize = "3rem";
    // myStyle.style.fontWeight = "bold";
    // myStyle.style.fontStyle = "italic";
    //Easy way:
    myStyle.classList.add("change-css-style");//. দিতে হবে না, কারণ classList ব্যবহার করে class যোগ করেছি।
}
function removeStyle(){
    myStyle.classList.remove("change-css-style");
}