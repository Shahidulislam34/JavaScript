console.log("First Line");

const taskOne = () =>{
    return new Promise((resolve, reject) =>{
        let taskOneComplete = true;
        setTimeout(() => {
            if (taskOneComplete) resolve("Task 1 is completed");
            else reject("Task 1 is not completed");
        }, 2000);
    });
}
const taskTwo = () =>{
    return new Promise((resolve, reject) =>{
        let taskTwoComplete = true;
        setTimeout(() => {
            if (taskTwoComplete) resolve("Task 2 is completed");
            else reject("Task 2 is not completed");
        }, 1000);
    });
}
const taskThree = () =>{
    return new Promise((resolve, reject) =>{
        let taskThreeComplete = false;
        setTimeout(() => {
            if (taskThreeComplete) resolve("Task 3 is completed");
            else reject("Task 3 is not completed");
        }, 2000);
    });
}

// taskOne()
// .then((msg) =>{
//     console.log(msg);
// })
// .then(taskThree)
// .then((msg) => console.log(msg))
// .catch((err) => console.log(err))
// .then(taskTwo)
// .then((msg) => console.log(msg))
// .catch((err) => console.log(err))
// // .catch((err) => console.log(err))// আগের catch-এর পর থেকে এই catch পর্যন্ত নতুন কোনো error না হলে,এই catch কাজ করবে না।
// .finally(() => console.log("Promise chaining is stopped"));

//easy way:
async function callAllTaskOneByOne(){
    try{
        const task1 = await taskOne();
        console.log(task1);
        const task2 = await taskTwo();
        console.log(task2);
        const task3 = await taskThree();
        console.log(task3);
    }catch(err){
        console.log("Error:" + err);
    }
}
callAllTaskOneByOne();


console.log("Last Line");

/*
async/await হলো প্রমিজ (Promise) ব্যবহারের একটি আধুনিক এবং সহজ সিনট্যাক্স (Syntactic Sugar)। 
এটি প্রমিজ চেইনিংয়ের .then() বা .catch()-এর জটিলতা দূর করে অ্যাসিনক্রোনাস কোডকে দেখতে একদম সাধারণ 
সিনক্রোনাস (Synchronous) কোডের মতো সহজ বানিয়ে দেয়।


১. async/await কী?
async/await হলো জাভাস্ক্রিপ্টে অ্যাসিনক্রোনাস কাজ (যেমন: API থেকে ডাটা আনা, 
ডাটাবেজ ক্যোয়ারি বা ফাইল রিড করা) সহজভাবে করার একটি আধুনিক সিনট্যাক্স, যা ES2017 (ES8)-এ চালু হয়।

সহজ কথায়, এটি প্রমিজের (Promise) ওপর ভিত্তি করেই তৈরি Syntactic Sugar। 
এটি প্রমিজ চেইনিংয়ের .then() বা .catch() লেখার ঝামেলা দূর করে অ্যাসিনক্রোনাস কোডকে দেখতে একদম সহজ, সাধারণ সিনক্রোনাস (Synchronous) কোডের মতো বানিয়ে দেয়।

২. এটি কেন প্রয়োজন?
async/await আসার আগে জাভাস্ক্রিপ্টে অ্যাসিনক্রোনাস কাজ করার জন্য Callback এবং Promise Chaining (.then() / .catch()) ব্যবহার করা হতো। দুটি পদ্ধতিরই কিছু সীমাবদ্ধতা ছিল:

ক) অ্যাসিনক্রোনাস কোডের বিবর্তন:
Callbacks: একের ভেতর এক নেস্টেড কলব্যাক লিখতে গিয়ে তৈরি হতো "Callback Hell", 
যা পড়া ও ডিবাগ করা অত্যন্ত কঠিন ছিল।
Promise Chaining: এটি নেস্টিংয়ের সমস্যা সমাধান করলেও অনেক বড় চেইন এবং 
একের পর এক .then() লিখতে গিয়ে কোড অনেক বড় হয়ে যেত।
async/await: এটি চেইনিং সম্পূর্ণ তুলে দেয়। ফলে সাধারণ ভ্যারিয়াবল, if/else 
এবং প্রচলিত try...catch ব্লক ব্যবহার করে খুব সহজে কোড লেখা যায়।

এটি পেছনে কীভাবে কাজ করে?
async/await মূলত দুটি কিওয়ার্ডের ওপর নির্ভর করে কাজ করে:

async কিওয়ার্ড:
এটি যেকোনো ফাংশনের সামনে বসানো হয় (async function myFunc() {})।
নিয়ম: একটি async ফাংশন সবসময় একটি Promise রিটার্ন করে।
আপনি যদি ফাংশনটির ভেতর থেকে কোনো সাধারণ মানও রিটার্ন করেন (যেমন: return "Hello"), 
জাভাস্ক্রিপ্ট সেটিকে স্বয়ংক্রিয়ভাবে একটি Resolved Promise-এ মুড়িয়ে (Promise.resolve("Hello")) রিটার্ন করে।

await কিওয়ার্ড:
এটি শুধুমাত্র async ফাংশনের ভেতরেই ব্যবহার করা যায়।
এটি কোনো প্রমিজের সামনে বসে (await fetchData())।
নিয়ম: প্রমিজটি সমাধান (resolve বা reject) না হওয়া পর্যন্ত await ঐ async ফাংশনের এক্সিকিউশনকে পজ (Pause) করে ধরে রাখে।
নন-ব্লকিং আচরণ: এই সময় ব্রাউজার বা জাভাস্ক্রিপ্ট ইঞ্জিনের মেইন থ্রেড ব্লক হয় না; 
Event Loop ব্যাকগ্রাউন্ডে অন্যান্য কাজ চালাতে থাকে। প্রমিজটি নিষ্পন্ন হলে await ভেতর থেকে রেজাল্ট এক্সট্রাক্ট 
করে ভ্যারিয়েবলে বসায়, অথবা এরর হলে থ্রো করে।

Function একটি Promise Return করে (যার ভেতরে ডাটা বা এরর মেসেজ মোড়ানো/Wrapped অবস্থায় থাকে, resolve/reject message)।
await Keyword সেই Promise-টিকে Accept করে বা রিসিভ করে।
Extraction: await প্রমিজের স্টেট দেখে সেটির ভেতর থেকে রেজাল্ট বা এরর মেসেজটি Extract (বের) করে আনে। 
তারপর প্রিন্ট/স্টোর/সেটা নিয়ে কাজ করে।




*/