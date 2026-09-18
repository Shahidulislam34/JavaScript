
//call korar age naki pore function likhesi seta matter kore na.Likhlae hobe ak jaighai.

function summation(num1, num2) {
    console.log(num1 + " + " + num2 + " = " + (num1 + num2));
    return num1 + num2;
}

let a = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));
let sum = summation(a, b);
console.log(sum)

subtraction(a, b);
function subtraction(n1, n2) {
    console.log(n1 + " - " + n2 + " = " + (n1 - n2));
}


//IIFEs(Immediately Invokeable Function Expressions): Don't need to call. Automatically run it when execution
(function print(myName) {
    console.log(myName);
})("Md. Shahidul Islam Shourov");

//Function Expression: We can store functin into variable and call the function using variable
let mulFunction = function multiplication(num1, num2) {
    console.log(num1 + " x " + num2 + " = " + (num1 * num2));
}
mulFunction(5, 10);


//pass an array to the function:
function highestScore(tmp) {
    let mx = tmp[0];
    for (let i = 0; i < tmp.length; ++i) {
        if (mx < tmp[i]) mx = tmp[i];
    }
    return mx;
}
let arr = [5, 3, 1, 7, 9];
console.log(highestScore(arr));