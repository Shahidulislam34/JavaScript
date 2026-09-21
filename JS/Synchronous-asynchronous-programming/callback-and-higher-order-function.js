const taskOne = (callBack) =>{
    console.log("Task 1");
    callBack();
}
const taskTwo = (callBack) =>{
    setTimeout(()=>{
        console.log("Task 2");
        callBack();
    }, 2000);
}
const taskThree = (callBack) =>{
    console.log("Task 3");
    callBack();
}
const taskFour = (callBack) =>{
    console.log("Task 4");
    callBack();
}
const taskFive = () =>{
    console.log("Task 5");
}

/*
taskOne(function f1(){
    console.log("Higher Order Function");
    taskTwo(function f2(){
        taskThree(function f3(){
            taskFour(function f4(){
                taskFive();
            });
        });
    });
});
*/

//using arrow function:
taskOne(()=>{
    console.log("Higher Order Function");
    taskTwo(()=>{
        taskThree(()=>{
            taskFour(()=>{
                taskFive();
            });
        });
    });
});


/*
১. Callback Function (কলব্যাক ফাংশন)
যে ফাংশনটিকে অন্য একটি ফাংশনের ভেতরে আর্গুমেন্ট (Argument) বা ইনপুট হিসেবে পাঠানো হয়, 
তাকে Callback Function বলে।
Example: f1, f2,f3,f4 or all Anonymous Arrow Functions.

এটি নিজে সাথে সাথে রান হয় না; যেই ফাংশনের ভেতরে একে পাঠানো হয়েছে, 
সে তার প্রয়োজন অনুযায়ী বা কাজ শেষে এই কলব্যাক ফাংশনটিকে ডেকে (Call করে) এক্সিকিউট করে।

২. Higher-Order Function (হায়ার অর্ডার ফাংশন)
যে ফাংশনটি অন্য কোনো ফাংশনকে আর্গুমেন্ট/ইনপুট হিসেবে গ্রহণ করে, 
অথবা অন্য কোনো ফাংশনকে আউটপুট হিসেবে রিটার্ন (Return) করে, তাকে Higher-Order Function বলে।

example: taskOne(), taskTwo(), taskThree(), taskFour(), taskFive().
*/



/*
JavaScript-এ Callback এবং Higher-Order Function ব্যবহার করার মূলত ৩টি বড় কারণ রয়েছে:

১. অ্যাসিনক্রোনাস (Asynchronous) কাজগুলো ক্রমানুসারে সম্পন্ন করার জন্য
JavaScript সাধারণত দ্রুত সব কোড একসাথে রান করে ফেলে। কিন্তু ব্যাকগ্রাউন্ডের কিছু কাজ করতে সময় লাগে—
যেমন: database থেকে ডাটা আনা (API Call), ফাইল আপলোড করা, বা নির্দিষ্ট সময় পর কিছু রান করা (setTimeout)।

যদি আপনি চান, "আগে ডাটা লোড হওয়ার কাজ শেষ হবে, তারপরই কেবল সেটি স্ক্রিনে দেখাবে", 
তবে এই ধারাবাহিকতা বা অর্ডার বজায় রাখার একমাত্র উপায় হলো Callbacks বা Higher-Order Functions ব্যবহার করা।


২. ইভেন্ট-ড্রাইভেন প্রোগ্রামিং (Event Driven Architecture)
ওয়েবসাইটে ব্যবহারকারী কখন মাউসে ক্লিক করবেন বা ফর্মে টাইপ করবেন তা আগে থেকে জানা থাকে না। 
ব্রাউজারকে বলে রাখতে হয়: "ব্যবহারকারী ক্লিক করলেই কেবল নির্দিষ্ট ফাংশনটি রান করবে।"

// button.addEventListener হলো Higher-Order Function
// আর ভেতরের অ্যারো ফাংশনটি হলো Callback Function
button.addEventListener("click", () => {
    console.log("বাটনে ক্লিক করা হয়েছে!");
});



৩. কোড পুনর্ব্যবহার (Reusability) এবং ক্লিন আর্কিটেকচার
একই বড় ফাংশনের ভেতরে ছোট ছোট কাজের ফাংশন পাঠালে কোড অনেক ফ্লেক্সিবল হয়।
উদাহরণ: ধরুন আপনি একটি ক্যালকুলেটর বানাবেন।
সাধারণ উপায়ে আপনাকে যোগ, বিয়োগ, গুণ, ভাগের জন্য ৪টি আলাদা বড় ফাংশন লিখতে হতো।
Higher-Order Function ব্যবহার করলে ১টি মূল ফাংশন (calculate) বানিয়ে 
তার ভেতর প্রয়োজনমতো ছোট Callback ফাংশন পাঠিয়ে কাজ করা যায়:

function calculate(num1, num2, operation) {
    return operation(num1, num2); // Callback রান হচ্ছে
}

let add = (a, b) => a + b;
let multiply = (a, b) => a * b;

console.log(calculate(10, 5, add));      // 15
console.log(calculate(10, 5, multiply)); // 50
*/