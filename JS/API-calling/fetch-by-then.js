/*
4 ways to call api - XMLHttpRequest, fetch, axios, jquery

fetch() has replaced XMLHttpRequest
fetch() - global method for making HTTP Request
2 ways to call - then, async await

+ fetch() is easy to use compare to XMLHttpRequest
+ fetch() returns a promise
- returned promise can only handle network error
- does not support all the older browser
*/

console.clear();

//GET:
fetch("https://jsonplaceholder.typicode.com/posts")//this api show gives 100 data
.then((response) => {
    if (!response.ok) {
        throw new Error(`Error : ${response.status}`);
    }
    else {
        return response.json();
    }
})
.then((data) => console.log(data))
.catch((err) => console.log(err));


//POST:
fetch("https://jsonplaceholder.typicode.com/posts", {
    method : "POST",
    headers : {
        "content-type" : "application/json;charset = UTF-8"
    },
    body : JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    })
})
.then((response) =>{
    if (!response.ok) {
        return new Error(response.status);
    }
    else {
        return response.json();
    }
})
.then((data) => console.log(data))
.catch((err) => console.log(err));



//PUT:
fetch("https://jsonplaceholder.typicode.com/posts/5", {
    method : "PUT",
    headers : {
        "content-type" : "application/json;charset = UTF-8"
    },
    body : JSON.stringify({
        id: 5,
        title: 'fooma',
        body: 'barma',
        userId: 11,
    })
})
.then((response) =>{
    if (!response.ok) {
        return new Error(response.status);
    }
    else {
        return response.json();
    }
})
.then((data) => console.log(data))
.catch((err) => console.log(err));

//PATCH:
fetch("https://jsonplaceholder.typicode.com/posts/5", {
    method : "PATCH",
    headers : {
        "content-type" : "application/json;charset = UTF-8"
    },
    body : JSON.stringify({
        title: 'fooooooooo',
        body : 'barrrrrrrr'
    })
})
.then((response) =>{
    if (!response.ok) {
        return new Error(response.status);
    }
    else {
        return response.json();
    }
})
.then((data) => console.log(data))
.catch((err) => console.log(err));

//DELETE:
fetch("https://jsonplaceholder.typicode.com/posts/5", {
    method : "DELETE"
})
.then((response) => {
    if (!response.ok) {
        return new Error(response.status);
    }
    else {
        return response.json();
    }
})
.then((data) => console.log(data))
.catch((err) => console.log(err));




/*
সম্পূর্ণ এক্সিকিউশন প্রসেসটি ধাপে ধাপে ব্যাখ্যা করা হলো:
১. fetch() কল করা (Initiating Request)
fetch("https://jsonplaceholder.typicode.com/posts")
fetch() মেথডটি ব্যাকগ্রাউন্ডে HTTP GET রিকুয়েস্ট পাঠানো শুরু করে।

এটি সাথে সাথে একটি Pending Promise রিটার্ন করে। জাভাস্ক্রিপ্ট ইঞ্জিন বাকি কোড বা অন্যান্য
 টাস্কের দিকে এগিয়ে যায় এবং ব্রাউজারের ওয়েব এপিআই (Web API) নেটওয়ার্কের কাজ পরিচালনা করে।

২. প্রথম .then() — Headers ও Status রিসিভ করা:
.then((response) => {
    if (!response.ok) {
        throw new Error(`Error : ${response.status}`);
    } else {
        return response.json();
    }
})

যখনই সার্ভার থেকে রিকুয়েস্টের প্রাথমিক রেসপন্স (HTTP Headers এবং Status Code) চলে আসে,
প্রথম .then() কলব্যাকটি রান হয়।response.ok চেক: HTTP Status Code 200 থেকে 299-এর মধ্যে থাকলে
response.ok এর মান হয় true।   যদি false হয় (যেমন 404 বা 500), এটি একটি Error থ্রো করে যা সরাসরি 
.catch()-এ চলে যায়।   যদি true হয়, এটি response.json() মেথডটিকে রিটার্ন করে।

৩. response.json() — Body Stream পড়া
response.json() নিজে একটি নতুন Promise রিটার্ন করে।
এটি ব্যাকগ্রাউন্ডে রেসপন্স বডির পুরো Stream (১০০টি পোস্টের JSON স্ট্রিং) পড়া শেষ হওয়া পর্যন্ত অপেক্ষা করে।
পড়া শেষ হলে JSON স্ট্রিংটিকে কনভার্ট করে একটি JavaScript Array of Objects বানিয়ে পরবর্তী .then()-এ পাস করে।


৪. দ্বিতীয় .then() — ডাটা ব্যবহার করা
.then((data) => console.log(data))
response.json() প্রসেস শেষ হওয়ার পর এই দ্বিতীয় .then() সক্রিয় হয়।
এখানে data প্যারামিটারের ভেতরে ১০০টি পোস্টের অ্যারেই অবজেক্ট চলে আসে।
console.log(data) ব্রাউজার কনসোলে ১০০টি ডাটার অ্যারেই প্রিন্ট করে দেখায়।

৫. .catch() — এরর হ্যান্ডলিং
.catch((err) => console.log(err))
পুরো প্রসেসের যেকোনো স্থানে কোনো ভুল হলে (যেমন: ইন্টারনেট কানেকশন না থাকা, ভুল URL, 
অথবা HTTP Status !response.ok হওয়া) জাভাস্ক্রিপ্ট সাথে সাথে প্রসেস থামিয়ে দিয়ে এই .catch() 
ব্লকে চলে আসে এবং এরর মেসেজটি প্রিন্ট করে।
*/



/*
PUT ব্যবহারের ক্ষেত্রে:PUT = রিপ্লেস / সম্পূর্ণ আপডেট (Full Replacement)
আপনাকে পুরো অবজেক্ট পাঠাতে হবে:
// PUT Request Body
{
  "id": 1,
  "name": "Sagor",
  "dept": "ICT",
  "city": "Dhaka"
}
সতর্কতা: যদি আপনি PUT-এ শুধু {"city": "Dhaka"} পাঠান, তবে সার্ভার আপনার name এবং dept ফিল্ড খালি বা null করে দিতে পারে।

PATCH ব্যবহারের ক্ষেত্রে:PATCH = আংশিক আপডেট (Partial Update)
আপনাকে শুধু পরিবর্তনীয় অংশটি পাঠালেই হবে:

// PATCH Request Body
{
  "dept": "CSE",
  "city": "Dhaka"
}
এটি বাকি ফিল্ডগুলো (name, dept) স্পর্শ করবে না, শুধু city,dept ফিল্ড আপডেট করবে।
*/