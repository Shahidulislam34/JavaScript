// var arr = new Array(5); //or
var arr = [];
for (let i = 0; i < 5; ++i) {
    // arr[i] = Number(prompt(`Enter the element arr[${i}]:`));
    arr[i] = Number(i);
}
// arr[10] = 10;//avabe dile majkhaner index gula undefined thakbe, sob theke boro j index e rakha hobe sei onujayi size hobe.
console.log(arr.length);
for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i] + "\n");
}

console.log("length:" + arr.length);
arr.push(10);//push back
arr.unshift(20);//push front
console.log(arr);

arr.pop();//pop back
arr.shift();//pop front
console.log(arr);


//initialization:
let arr2 = [2, 3, 4, 5, 6, 11];
console.log(arr2);

//splice method:arr2.splice(index_number, remove_number_of_element_from_index_number, add_any_number_of_elements_that_you_want_to_add);
arr2.splice(2, 2, 8,8,8,8,8);
console.log(arr2);

arr2.splice(2, 2);//remove two element from index 2
console.log(arr2);

//slice method:
let sliceArray = arr2.slice(2, 4);//store the values of index from l to (r - 1) 
console.log(sliceArray);
sliceArray = arr2.slice(2);//Remove first two element. But not change the original array.
console.log(sliceArray);

//Sorting: works perfectly for string data type. Don't work for number perfectly. number r jonno age number k string e convert kore then sort kore alphabetically,jeta number r jonno wrong sorting.
let arr4 = ["shourov", "abir", "sagor", "minarul"];
arr4.sort();
console.log(arr4);
arr4.reverse();
console.log(arr4);

//Sorting for number: sort using annonymous function within sort function
let arr3 = [6,3,7,2,8,9,1];
console.log(arr3);
arr3.sort(function(a, b) {
    // return a - b;//assending order: a - b  position hole swap hoi, negative hole hoi na
    return b - a;//descending order
});
console.log(arr3);


//1D or 2D or any dimention: Aksathe onk gula data type alada alada index e thakte pare akta array r modde.

//2D array:
console.log("2D Array");
let twoDArray = new Array(5);// or let twoDArray = [];
for (let i = 0; i < 5; ++i){
    twoDArray[i] = new Array();//or twoDArray[i] = [];
    twoDArray[i].push(5);
    twoDArray[i].push(50);
    twoDArray[i].push(15);
}
twoDArray[3].push(12);
for (let i = 0; i < 5; ++i) {
    console.log(twoDArray[i]);
}

//initialization:
console.log("2D Array Initialization:");
let twoDArray2 = [
    [2, 3, 4, 5],
    [6, 7, 1],
    [55,33,11],
    [55,3,4,5,6,7,8]
];
console.log(twoDArray2[1][2]);
for (let i = 0; i < twoDArray2.length; ++i) {
    console.log(twoDArray2[i]);
}


