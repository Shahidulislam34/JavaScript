/*
4 ways to call API:
    1.XMLHTTPRequest: Old version
    2.Fetch : Popular
    3.Axios : Popular
    4.Jquery
*/


function makeRequest(method, url) {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        
        xhr.onload = () =>{
            const data = xhr.response;//json format
            // const jObject = JSON.parse(data);//javascript object
            console.log(data);
        }
        xhr.onerror = () =>{
            console.log("Error Occured");
        }
        xhr.send();
    });
}
getData = () =>{
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
    .then((msg) => console.log(msg));
}
getData();


// function makeRequest(method, url, data) {
//     const xhr = new XMLHttpRequest();//create object
//     xhr.open(method, url);
//     xhr.setRequestHeader('content-type', 'application/json');
//     xhr.onload = () =>{
//         const data = xhr.response;//json format
//         // const jObject = JSON.parse(data);//javascript object
//         console.log(data);
//     }
//     xhr.onerror = () =>{
//         console.log("Error Occured");
//     }
//     xhr.send(JSON.stringify(data));
// }
// sendData = () =>{
//     makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
//         title: 'shourov',
//         body: 'bogura',
//         userId: 1
//     });
// }
// sendData();


// function makeRequest(method, url, data) {
//     const xhr = new XMLHttpRequest();//create object
//     xhr.open(method, url);
//     xhr.setRequestHeader('content-type', 'application/json');
//     xhr.onload = () =>{
//         const data = xhr.response;//json format
//         // const jObject = JSON.parse(data);//javascript object
//         console.log(data);
//     }
//     xhr.onerror = () =>{
//         console.log("Error Occured");
//     }
//     xhr.send(JSON.stringify(data));
// }
// updateFullData = () =>{
//     makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
//         id: 1,
//         title: 'Shahidul',
//         body: 'bogura',
//         userId: 1
//     });
// }
// updateFullData();

// function makeRequest(method, url, data) {
//     const xhr = new XMLHttpRequest();//create object
//     xhr.open(method, url);
//     xhr.setRequestHeader('content-type', 'application/json');
//     xhr.onload = () =>{
//         const data = xhr.response;//json format
//         // const jObject = JSON.parse(data);//javascript object
//         console.log(data);
//     }
//     xhr.onerror = () =>{
//         console.log("Error Occured");
//     }
//     xhr.send(JSON.stringify(data));
// }
// updatePartialData = () =>{
//     makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
//         title: 'This is changed',
//         body: 'Tangail'
//     });
// }
// updatePartialData();



// function makeRequest(method, url, data) {
//     const xhr = new XMLHttpRequest();//create object
//     xhr.open(method, url);
//     xhr.setRequestHeader('content-type', 'application/json');
//     xhr.onload = () =>{
//         const data = xhr.response;//json format
//         // const jObject = JSON.parse(data);//javascript object
//         console.log(data);
//     }
//     xhr.onerror = () =>{
//         console.log("Error Occured");
//     }
//     xhr.send(JSON.stringify(data));
// }
// deleteData = () =>{
//     makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
// }
// deleteData();


/*
get request:

কোডের লাইনগুলোর Execution Order (বা রান হওয়ার সঠিক সময়ক্রম) নিচে দেওয়া হলো:
কোড এক্সিকিউশনের ক্রমানুসারে লাইনসমূহ:
const xhr = new XMLHttpRequest();

১ম এক্সিকিউট হবে: মেমোরিতে XHR অবজেক্ট তৈরি হবে।
xhr.open(method, url);

২য় এক্সিকিউট হবে: রিকুয়েস্টের টাইপ (GET) এবং URL কনফিগার হবে।
xhr.onload = () => { ... }

৩য় এক্সিকিউট হবে: ব্রাউজার কেবল onload-এর ভেতরের ফাংশনটিকে লিস্টেনার হিসেবে রেজিস্টার (Register) করে রাখবে। 
কিন্তু ব্র্যাকেটের ভেতরের কোড এখনই রান করবে না!
xhr.onerror = () => { ... }

৪র্থ এক্সিকিউট হবে: একইভাবে onerror লিস্টেনারটিও রেজিস্টার হয়ে থাকবে। ভেতরের কোড রান করবে না।
xhr.send();

৫ম এক্সিকিউট হবে: এই লাইনে এসে রিকুয়েস্টটি সত্যি সত্যি সার্ভারে চলে যাবে।

⏳ বিরতি (Network Wait Time):
send() হওয়ার পর ব্রাউজার ব্যাকগ্রাউন্ডে অপেক্ষা করবে যতক্ষণ না সার্ভার থেকে ডাটা ফেরত আসে (যেমন: ২০০ বা ৫০০ মিলি-সেকেন্ড)।

📩 সার্ভার থেকে ডাটা চলে আসার পর:
const data = xhr.response;
৬ষ্ঠ এক্সিকিউট হবে: সার্ভার থেকে ডাটা আসার পর অবশেষে onload-এর ব্র্যাকেটের ভেতরের প্রথম লাইনটি এক্সিকিউট হবে।

console.log(data);
৭ম এক্সিকিউট হবে: রেসপন্স ডাটা কনসোলে প্রিন্ট হবে।

(যদি কোনো নেটওয়ার্ক এরর হয়, onload এর ভিতরের code এক্সিকিউট না হয়ে 
 onerror-এর ভেতরের console.log("Error Occured"); এক্সিকিউট হবে।)


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