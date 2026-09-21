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

taskOne()
.then((msg) =>{
    console.log(msg);
})
.then(taskThree)
.then((msg) => console.log(msg))
.catch((err) => console.log(err))
.then(taskTwo)
.then((msg) => console.log(msg))
.catch((err) => console.log(err))
// .catch((err) => console.log(err))// আগের catch-এর পর থেকে এই catch পর্যন্ত নতুন কোনো error না হলে,এই catch কাজ করবে না।
.finally(() => console.log("Promise chaining is stopped"));


console.log("Last Line");


// অনেকগুলো Promise or Promise chaining-এর জন্য একটি catch-ই যথেষ্ট।
// Promise chaining-এ একটি catch আগের যেকোন Promise-এর(immediate আগে কোন catch থাকলে তার পরের)
//  error catch করতে পারে।

// Chaining-এর মাঝে যেকোনো জায়গায় error হলে সরাসরি catch কাজ করবে
// এবং পরবর্তী task-গুলো আর complete হবে না।

// Promise chaining-এ আগের task complete(resolve) না হওয়া পর্যন্ত
// পরবর্তী task শুরু হবে না।

// যদি আগের task-টি reject হয়: next .catch() এর আগে পর্যন্ত .then() টাস্কগুলো একদম শুরুই হবে না (স্কিপ হয়ে যাবে)। 
// কোডের এক্সিকিউশন সরাসরি লাফ দিয়ে next .catch() এ চলে যাবে। এই catch এর পরে যদি কোন task/then
// থাকে তাহলে সেটা run হবে।

//যদি প্রমিজ চেইনে একাধিক .finally() থাকে, তবে সহজ নিয়ম হলো: সবগুলো .finally() ব্লকই নিশ্চিতভাবে এবং 
//ওপর থেকে নিচে পর্যায়ক্রমে (Sequentially) রান করবে।
//প্রমিজটি সফল (resolve) হোক বা ব্যর্থ (reject) হোক—কোনোটিই বাদ যাবে না।

/*
"Promise chaining-এর মাধ্যমে আমরা asynchronous কাজগুলোকে Synchronous-এর মতো দেখতে বা অনুকরণ (Simulate) করে 
একটার পর একটা (Sequentially) এক্সিকিউট করাতে পারি।"

কিন্তু Promise Chaining ব্যবহার করলে:
১. প্রথম Asynchronous কাজ শুরু হয়।
২. প্রথম কাজটি শেষ না হওয়া পর্যন্ত দ্বিতীয় Asynchronous কাজ শুরু হতে পারে না।
৩. প্রথম কাজের প্রাপ্ত ফলাফল (Data) ব্যবহার করে দ্বিতীয় কাজ চালনা করা যায়।

ফলে ব্যাকগ্রাউন্ডে এটি Asynchronous থাকলেও কোডের লজিক্যাল ফ্লো বা কাজের ক্রম (Sequential Flow) 
দেখতে একদম Synchronous কোডের মতো একের পর এক রান করে।
*/