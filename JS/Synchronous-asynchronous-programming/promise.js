console.log("First Line");

const getData = new Promise((resolve, reject) =>{
    let taskCompleted = true;
    setTimeout(() => {
        if (taskCompleted) {
            resolve("getData is completed");
        }
        else {
            reject("getData is not completed");
        }
    }, 3000);
    
});

const updateData = new Promise((resolve, reject) =>{
    let updateCompleted = false;
    setTimeout(() => {
        if (updateCompleted) {
            resolve("Update is completed");
        }
        else {
            reject("Update is not completed");
        }
    }, 2000);
});

// সবগুলো একটা একটা করে uncomment করে এবং true/false change করে check করো

// getData
// .then((msg) =>{
//     console.log(msg);
// })
// .catch((err) =>{
//     console.log(err);
// })
// .finally(() =>{
//     console.log("All getData promises are completed");
// });

// updateData
// .then((msg) =>{
//     console.log(msg);
// })
// .catch((err) =>{
//     console.log(err);
// })
// .finally(() =>{
//     console.log("All updateData promises are completed");
// });

// //Call multiple promise at a time:
// Promise.all([getData, updateData])
// .then((msg) => {
//     console.log("Promise all");
//     console.log(msg);
// })
// .catch((err) => console.log(err));

//Give only first resolved or rejected promise from multiple promises
Promise.race([getData, updateData])
.then((msg) => {
    console.log("Promise race");
    console.log(msg);
})
.catch((err) => console.log(err));

console.log("Last Line");



/*
একসাথে একাধিক প্রমিজ থাকলে কোন প্রমিজটির কাজ ব্যাকগ্রাউন্ডে কত দ্রুত শেষ (Resolve/Reject) হচ্ছে, 
তার ওপর ভিত্তি করে সেটির রেজাল্ট সবার আগে রান করবে।

এখানে মূল নিয়ম হলো: যে প্রমিজটি আগে Resolve হবে, সেটির .then() মাইক্রোটাস্ক কিউতে (Microtask Queue) 
আগে ঢুকবে এবং আগে এক্সিকিউট হবে।


বিষয়টি বুঝতে ৩টি ভিন্ন ক্ষেত্র নিচে দেওয়া হলো:

১. যদি সব প্রমিজ সাথে সাথেই (Instant) Resolve হয়
যদি প্রমিজগুলোর মধ্যে কোনো বিলম্ব না থাকে (যেমন: সরাসরি Promise.resolve() বা কোনো টাইমার ছাড়া সংজ্ঞায়িত প্রমিজ), 
তবে কোডে যেগুলো ওপর থেকে নিচে যেভাবে লেখা হয়েছে, সেই ক্রমানুসারেই রান করবে।

২. যদি প্রমিজগুলোর কাজের সময় (Timing) আলাদা হয়
যদি প্রমিজগুলোর ভেতরে সময়সাপেক্ষ কাজ থাকে (যেমন: API ফেচিং বা setTimeout), তবে যেটির সময় সবচেয়ে কম লাগবে, 
সেটিই সবার আগে প্রিন্ট হবে।

৩. একাধিক প্রমিজ হ্যান্ডেল করার বিশেষ প্রমিজ মেথডসমূহ
বাস্তব প্রজেক্টে একসাথে অনেকগুলো প্রমিজ থাকলে নির্দিষ্ট প্রয়োজন অনুযায়ী JavaScript-এর বিশেষ কিছু Built-in মেথড ব্যবহার করা হয়:
i) সব প্রমিজ সফল হলে একসাথে সবগুলোর রেজাল্ট অ্যারে হিসেবে দেয়। (যেকোনো ১টি এরর খেলে পুরোটা রিজেক্ট হয়ে যায়)।
	Promise.all([p1, p2, p3])
ii) যে প্রমিজটি সবার আগে শেষ হবে (Resolve বা Reject যাই হোক), শুধু সেটির ফলাফল ফিরিয়ে দেবে।
	Promise.race([p1, p2, p3])
iii) সবার আগে সফল (Resolve) হওয়া প্রথম প্রমিজটি ফিরিয়ে দেয়।
	Promise.any([p1, p2, p3])

*/


/*
Promise এ .then(),.catch(),.finally() কীভাবে কাজ করে?
JavaScript-এ .then(), .catch(), এবং .finally() হলো প্রমিজের (Promise) ফলাফল গ্রহণ ও প্রসেস করার ৩টি Consumer Method।
প্রমিজের অবস্থা বা স্টেট (State) পরিবর্তনের ওপর নির্ভর করে এগুলো ধাপে ধাপে কাজ করে:

১. .then() — সফলতার জন্য (Resolved State)
যখন একটি প্রমিজ সফলভাবে তার কাজ শেষ করে (resolve() কল হয়), তখন প্রমিজের স্টেট Fulfilled হয় এবং 
সাথে সাথেই .then() ব্লকটি এক্সিকিউট করে।

এটি resolve() থেকে পাঠানো ডাটা বা মানটি রিসিভ করে।
.then() থেকে কোনো ডাটা রিটার্ন করলে সেটি পরের .then()-এ চলে যায় (যাকে Promise Chaining বলা হয়)।

২. .catch() — ভুলের জন্য (Rejected State)
যখন প্রমিজের ভেতর কোনো সমস্যা হয় বা ব্যর্থ হয় (reject() কল হয়) অথবা কোডে কোনো এরর দেখা দেয়, তখন প্রমিজের স্টেট Rejected হয়ে যায়।

প্রমিজ রিজেক্ট হওয়ার সাথে সাথে জাভাস্ক্রিপ্ট মাঝের সব .then() স্কিপ করে সরাসরি .catch() ব্লকে চলে যায়।
এটি reject() থেকে পাঠানো এরর মেসেজ বা অনাকাঙ্ক্ষিত ভুল ধরে ফেলে অ্যাপ ক্র্যাশ হওয়া থেকে রক্ষা করে।

৩. .finally() — চূড়ান্ত নিষ্পত্তির জন্য (Settled State)
প্রমিজের ফলাফল যাই হোক না কেন—কাজ সফল হোক (resolve) কিংবা ব্যর্থ হোক (reject)—.finally() ব্লক নিশ্চিতভাবে রান করবেই।

এর ভেতর কোনো ডাটা বা এরর মেসেজ প্যারামিটার হিসেবে আসে না।
সাধারণত রিসোর্স ফ্রি করা, ফাইল বা কানেকশন ক্লোজ করা বা UI-এর লোডার বন্ধ করার মতো ক্লিনআপ (Cleanup) কাজে এটি ব্যবহার করা হয়।

Multiple independent promise থাকলে finally কীভাবে কাজ করে?
১. সময় আলাদা হলে (Asynchronous / Delayed)
ঘটনা: প্রমিজগুলো আলাদা আলাদা সময়ে (যেমন: টাইমার বা API রেসপন্স দিয়ে) শেষ হয়।
নিয়ম: যে প্রমিজটি আগে শেষ হবে, সেটির .then() এবং সেটির .finally() এক সাথেই শেষ হয়ে যাবে। 
	এরপর দ্বিতীয় প্রমিজের কাজ হলে সেটির .then() ও .finally() রান করবে।

২. সাথে সাথে Resolve হলে (Instant Resolve)
ঘটনা: প্রমিজগুলোতে কোনো টাইমার বা বিলম্ব নেই, দুটিই সাথে সাথে রিভলভ হয়।
নিয়ম: জাভাস্ক্রিপ্ট লেয়ার অনুযায়ী কাজ করে—
	Microtask Queue-তে প্রথমে সবগুলো প্রমিজের .then() আগে লাইন ধরে দাঁড়ায়।
	.then()-এর কাজ শেষ হওয়ার পর সবগুলো প্রমিজের .finally() নতুন করে কিউয়ের পেছনে গিয়ে যুক্ত হয়।
	ফলে আগে সব প্রমিজের .then() প্রিন্ট হয়, তারপর সব প্রমিজের .finally() প্রিন্ট হয়।
    যে প্রমিজের .then() আগে সম্পন্ন হয়ে Microtask Queue-তে প্রথম .finally() যোগ করেছিল, 
    সেটির .finally()-ই আগে প্রিন্ট হবে।

*/