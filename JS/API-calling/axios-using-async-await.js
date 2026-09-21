// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
// axios is a js library
// it helps to make request from browser (plain js/Vue/React/Angular), node.js

// + very easy to use
// + it supports all modern browser includig IE
// + it returns promise
// + throws error brilliantly
// + No need to set header cause axios is intelligent
// + No need to use JSON.stringfy.It takes javascript object and automatically convert into json format

// axios returns response object - data, status, statusText, headers, config



console.clear();

//GET:
// const makeRequest = async(url) =>{
//     return await axios(url);
// };
// const getData = () =>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => {
//         console.log(response);//show full response(status code, data,headers etc)
//         console.log(response.data);
//         console.log(response.status);
//     })
//     .catch((err) => console.log(err));
// };
// getData();


//POST:
// const makeRequest = async(config) =>{
//     return await axios(config);
// };
// const postData = () =>{
//     makeRequest({
//         url : "https://jsonplaceholder.typicode.com/posts",
//         method : "POST",
//         data : {//key name 'data' dite hobe then by r moto 'body' na
//             title: 'foo',
//             body: 'bar',
//             userId: 1
//         }
//     })
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err));
// };
// postData();

//PUT:
// const makeRequest = async(config) =>{
//     return await axios(config);
// };
// const updateFull = () =>{
//     makeRequest({
//         url : "https://jsonplaceholder.typicode.com/posts/7",
//         method : "PUT",
//         data: {
//             id: 7,
//             title: 'fooma',
//             body: 'barrma',
//             userId: 10
//         }
//     })
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err));
// };
// updateFull();


//PATCH:
const makeRequest = async(config) =>{
    return await axios(config);
};
const updatePartial = () =>{
    makeRequest({
        url : "https://jsonplaceholder.typicode.com/posts/5",
        method : "PATCH",
        data : {
            title: 'foomaaaaa',
            body: 'barrmaaaaa'
        }
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};
updatePartial();


//DELETE:
// const makeRequest = async(config) =>{
//     return await axios(config);
// };
// const deleteData = () =>{
//     makeRequest({
//         url : "https://jsonplaceholder.typicode.com/posts/7",
//         method : "DELETE"
//     })
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err));
// };
// deleteData();