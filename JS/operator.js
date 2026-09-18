// All operators(arithmatic, assignment, logical etc) 
// including pre or post increment and decrement operators are similar to c/c++.

var num1 = 20;
var num2 = 30;
console.log(num1 + num2);//arithmatic operator.
console.log(num1 - toString(num2));

var num3 = 100;//number
let num4 = "40";//string
console.log(num3 + num4);//work like concatenation
console.log(num3 - num4);//work perfectly
console.log(num3 * num4);//work perfectly
console.log(num3 / num4);//work perfectly

if (num3 > num4) console.log("Greater");//work perfectly
else console.log("Smaller");

//ternary operator
var tmp = num3 > 500 ? "Greater than 500": "less than 500";
console.log(tmp);
tmp = num3 > 500 ? "Greater than 500": num3 > 300 ? "Greater than 300" : "less than or equal 300";
console.log(tmp);


//only one difference:
var val1 = 20;
var val2 = "20";
if (val1 == val2) console.log(val1 + " and " + val2 + " are equal using ==");
else console.log(val1 + " and " + val2 + " are not equal using ==");

if (val1 === val2) console.log(val1 + " and " + val2 + " are strictly equal using ===");
else console.log(val1 + " and " + val2 + " are not strictly equal using ===");

//== means equal camparing only with value
//=== means strictly equal comparing value and datatype both.

if (val1 != val2) console.log(val1 + " and " + val2 + " are not equal using ==");
else console.log(val1 + " and " + val2 + " are not equal using ==");

if (val1 !== val2) console.log(val1 + " and " + val2 + " are not strictly equal using ===");
else console.log(val1 + " and " + val2 + " are strictly equal using ===");

// != means not equal
//!== means not strictly equal