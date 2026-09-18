let signup = document.querySelector("#signup-form");
for (let i = 0; i < signup.length; ++i) {
    signup.children[i].classList.add("signup");
}
// signup-এ যদি একটি মাত্র element থাকে, তাহলে শুধু তখনই আমরা children খুঁজে বের করতে পারব।
// querySelectorAll দিলে তখন আর signup-এর children খুঁজে বের করতে পারব না।

let form = document.querySelector("#signup-form")
let userName = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let userInfo = {
        name : userName.value,
        email : email.value,
        password : password.value
    }
    console.log(userInfo);
    userName.value = "";
    email.value = "";
    password.value = "";
});