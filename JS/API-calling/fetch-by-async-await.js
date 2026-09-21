console.clear();

//GET:
// const makeRequest = async(url) =>{
//     const response = await fetch(url);
//     if (!response.ok) 
//         throw new Error(response.status);//return reject promise
//     else 
//         return await response.json();//return resolve promise
// };

// const getData = () =>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// };
// getData();


//POST:
// const makeRequest = async(url, config) =>{
//     const response = await fetch(url, config);
//     if (!response.ok) 
//         throw new Error(response.status);
//     else 
//         return await response.json();
// };

// const sendData = () =>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts", {
//         method : "POST",
//         headers : {
//             "content-type" : "application/json;charset = UTF-8"
//         },
//         body : JSON.stringify({
//             title: 'fooma',
//             body: 'barma',
//             userId: 11
//         })
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// };
// sendData();



//PUT:
// const makeRequest = async(url, config) =>{
//     const response = await fetch(url, config);
//     if (!response.ok)
//         throw new Error(response.status);
//     else
//         return await response.json();
// };

// const updateFull = () =>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
//         method : "PUT",
//         headers : {
//             "content-type" : "application/json; charset = UTF-8"
//         },
//         body : JSON.stringify({
//             id: 1,
//             title: 'foooooooo',
//             body: 'barrrrrrrr',
//             userId: 1
//         })
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// };
// updateFull();


//PATCH:
// const makeRequest = async(url, config) =>{
//     const response = await fetch(url, config);
//     if (!response.ok) 
//         throw new Error(response.status);
//     else 
//         return await response.json();
// };
// const updatePartial = () =>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts/6", {
//         method : "PATCH",
//         headers : {
//             "content-type" : "application/json; charset = UTF-8"
//         },
//         body : JSON.stringify({
//             title: 'fooma',
//             body : 'barma'
//         })
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// };
// updatePartial();


//DELETE:
const makeRequest = async(url, config) =>{
    const response = await fetch(url, config);
    if (!response.ok) 
        throw new Error(response.status);
    else 
        return await response.json();
};
const deleteData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/6", {
        method : "DELETE"
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};
deleteData();



// একটি async ফাংশন সবসময় একটি Promise(resolve/reject) রিটার্ন করে।
// এখানে "Hello World" রিটার্ন করলেও async থাকার কারণে 
// এটি Promise.resolve("Hello World") আকারে রিটার্ন হচ্ছে।

/*
POST: Explanation
const makeRequest = async (url, config) => {
    // ১. সার্ভারে HTTP রিকুয়েস্ট পাঠানো এবং রেসপন্স আসা পর্যন্ত অপেক্ষা করা
    const response = await fetch(url, config);
    
    // ২. রেসপন্স সফল (Status Code 200-299) না হলে Error থ্রো করা
    if (!response.ok) 
        throw new Error(response.status);
    
    // ৩. রেসপন্স Body-র JSON Stream পড়া ও JavaScript Object-এ কনভার্ট হওয়া পর্যন্ত অপেক্ষা করে রিটার্ন করা
    else 
        return await response.json();
};

*/