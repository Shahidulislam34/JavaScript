const taskOne = () =>{
    console.log("Task 1");
}
const dataLoading = () =>{
    console.log("task 2 is completed");
}
const taskTwo = () =>{
    setTimeout(dataLoading, 2000);
}
const taskThree = () =>{
    console.log("Task 3");
}
const taskFour = () =>{
    console.log("Task 4");
}
const taskFive = () =>{
    console.log("Task 5");
}


taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();

/*
১. Synchronous (সিনক্রোনাস)
কাজের ধরন: লাইন বাই লাইন সিরিয়াল ধরে কাজ করে। 
আগের লাইনের কাজ শেষ না হওয়া পর্যন্ত পরের লাইন কাজ শুরু করতে পারে না।

২. Asynchronous (অ্যাসিনক্রোনাস)
কাজের ধরন: সময়সাপেক্ষ কাজগুলোকে ব্যাকগ্রাউন্ডে পাঠিয়ে দিয়ে পরের লাইনের কাজ চালিয়ে যায়। 
ব্যাকগ্রাউন্ডের কাজ শেষ হলে তা রেজাল্ট ফিরিয়ে দেয়।

আপনার কোডের উদাহরণ: taskTwo()-এর ভেতরের setTimeout()
যা ঘটে: এটি ২ সেকেন্ডের সময়সাপেক্ষ কাজ। তাই JavaScript ২ সেকেন্ড বসে না থেকে taskThree(), taskFour(), taskFive() আগেই প্রিন্ট করে ফেলে এবং টাইমার শেষ হলে সবার শেষে task 2 is completed প্রিন্ট করে।


স্টেপ-বাই-স্টেপ ব্যাকগ্রাউন্ড প্রসেস:
১. taskOne() কল
taskOne() ফাংশনটি সাথে সাথে Call Stack-এ যায় এবং এক্সিকিউট হয়।
কনসোলে প্রিন্ট হয়: Task 1।

২. taskTwo() কল
taskTwo() ফাংশনটি কল হলে তার ভেতরের setTimeout(dataLoading, 2000) রান করে।
setTimeout হলো ব্রাউজারে থাকা একটি Web API। ব্রাউজার এই dataLoading ফাংশনটিকে ধরে রাখে এবং ২০০০ মিলিসেকেন্ড (২ সেকেন্ড) কাউন্টডাউন শুরু করে।
JavaScript কিন্তু ২ সেকেন্ড বসে থাকে না! সে taskTwo()-এর কাজ শেষ করে সঙ্গে সঙ্গে পরবর্তী লাইনে চলে যায়।

৩. taskThree() কল
ব্রাউজারে টাইমার চলা অবস্থাতেই taskThree() এক্সিকিউট হয়।
কনসোলে প্রিন্ট হয়: Task 3।

.........

৬. ২ সেকেন্ড পর dataLoading() কল
২ সেকেন্ড পার হওয়ার পর Web API ওই dataLoading ফাংশনটিকে Callback Queue-তে পাঠায়।
Event Loop দেখে যে Call Stack খালি হয়ে গেছে (অন্য সব কাজ শেষ)। তখন সে Queue থেকে dataLoading ফাংশনটিকে এনে কল করে।
কনসোলে প্রিন্ট হয়: task 2 is completed।
*/


/*
setTimeout(dataLoading, 2000);
dataLoading function call: 
বন্ধনী দিলে বা না দিলে কী ঘটে?
১. dataLoading (সঠিক নিয়ম — ব্রাউজারকে দায়িত্ব দেওয়া)
এটি ফাংশনের নাম বা রেফারেন্স।

এর মানে হলো: "ব্রাউজার ভাই, এই dataLoading ফাংশনটি চিনে রাখো। তুমি ২ সেকেন্ড অপেক্ষা করো, তারপর নিজে এটাকে রান করো।"

২. dataLoading() (ভুল নিয়ম — তাৎক্ষণিক রান হয়ে যাওয়া)
বন্ধনী () দেওয়া মানে হলো ফাংশনটিকে সাথে সাথেই এক্সিকিউট/রান করে ফেলা।

আপনি যদি setTimeout(dataLoading(), 2000) লিখতেন, তবে ২ সেকেন্ড অপেক্ষা না করেই কোড 
পড়ার সাথে সাথে dataLoading() রান হয়ে যেত! 
আর ২ সেকেন্ড পর setTimeout চালানোর মতো কোনো ফাংশন আর খুঁজে পেত না।
*/

/*
Synchronous and Asynchronous চেনার সহজ উপায় (Visual Cheat Sheet):
জাভাস্ক্রিপ্টে মূলত নির্দিষ্ট কিছু ফাংশন এবং ফিচার অ্যাসিনক্রোনাস হিসেবে ডিজাইন করা হয়েছে। এগুলো বাদে বাকি সব কোডই সিনক্রোনাস।

⚡Synchronous (যা সাথে সাথে রান হয়):
সাধারণ ভ্যারিয়েবল ডিক্লেয়ারেশন (let x = 10;)
সাধারণ প্রিন্ট বা লগ (console.log())
গাণিতিক হিসেব-নিকাশ (10 + 20)
সাধারণ লুপ (for, while)
সাধারণ ফাংশন কল
if...else কন্ডিশন চেক

⚡ Asynchronous (যা ব্যাকগ্রাউন্ডে অপেক্ষা করে):
১. Timer Functions: setTimeout(), setInterval()
২. Promise APIs & Methods:
	new Promise()-এর পরের .then(), .catch(), .finally()
	Promise.all(), Promise.resolve()
৩. Async / Await Syntax: async ফাংশনের ভেতর await দিয়ে লেখা যেকোনো কাজ।
৪. Network / API Requests: fetch(), Axios, AJAX (XMLHttpRequest)
৫. DOM Event Listeners: element.addEventListener('click', ...) 
    (কারণ ক্লিক কখন হবে তার জন্য ব্রাউজারকে অপেক্ষা করতে হয়)
৬. Node.js File System / Database (Async Ops): fs.readFile(), MongoDB / MySQL কোয়েরি।
*/


/*
setTimeout(dataLoading, 0) দিলেও dataLoading ফাংশনটি সাথে সাথে রান হবে না। 
এটি ব্যাচ শেষ হওয়ার পর অর্থাৎ সকল Synchronous (সিনক্রোনাস) কোড এক্সিকিউট হওয়ার পরেই রান করবে।

কেন এমন হয়? (Event Loop-এর কারণ)
JavaScript-এ setTimeout সময়কে সরাসরি প্রসেসরের টাইম হিসেবে ধরে না, 
বরং এটি কাজ করে Event Loop এবং Callback Queue-এর মাধ্যমে:

১. Call Stack প্রথম গুরুত্ব পায়: JavaScript প্রথমে স্ক্রিপ্টে থাকা সমস্ত সিনক্রোনাস কোড (যেমন: taskOne(), taskThree(), taskFour(), taskFive())
 পর পর Call Stack-এ এনে এক্সিকিউট শেষ করে।
২. Queue-তে অপেক্ষা: setTimeout(..., 0) দেওয়া মাত্রই ব্রাউজার dataLoading ফাংশনটিকে সরাসরি Call Stack-এ না পাঠিয়ে Callback Queue (বা Task Queue)-তে পাঠিয়ে দেয়।
৩. Event Loop-এর পরীক্ষা: Event Loop অনবরত চেক করে যে Call Stack পুরোপুরি খালি হয়েছে কি না।
৪. সবার শেষে রান: যখন সমস্ত সাধারণ কোডের রান সম্পন্ন হয় এবং Call Stack পুরোপুরি খালি হয়, কেবল তখনই Event Loop থেকে dataLoading ফাংশনটি Call Stack-এ এসে রান করে।
*/