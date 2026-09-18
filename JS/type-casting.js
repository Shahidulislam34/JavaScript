let idStr = "24";
console.log(typeof(idStr));
console.log(idStr);


let idInt = parseInt(idStr);
console.log(typeof(idInt));
console.log(idInt);

let tkStr = "    20.44";
let tkFloat = parseFloat(tkStr);
console.log(typeof(tkFloat));
console.log(tkFloat);

let amount = prompt("Enter your amount:");//take input as string
console.log("Input type: \n" + typeof(amount));
amount = parseInt(amount);
console.log(typeof(amount));
console.log(amount);

let sal = "234324.23434";
sal = Number(sal);
console.log(typeof(sal));
console.log(sal);//it works like parseInt,parseFloat. Convert into number.