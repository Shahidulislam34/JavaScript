// 4 ways to call api - XMLHttpRequest, fetch, axios, jquery
// axios is a js library
// it helps to make request from browser (plain js/Vue/React/Angular), node.js

// + very easy to use
// + it supports all modern browser includig IE
// + it returns promise
// + throws error brilliantly
// + No need to set header cause axios is intelligent

// axios(config)
// axios(url [, config])

// axios.get(url [, config])
// axios.post(url [, config])
// axios.put(url [, config])
// axios.patch(url [, config])
// axios.delete(url [, config])

// axios returns promise / response object - data, status, statusText, headers, config


console.clear();
// console.log(window);


//GET:
axios.get("https://jsonplaceholder.typicode.com/posts")
.then((response) => console.log(response.data))
.catch((err) => console.log(err));


//POST:
axios.post("https://jsonplaceholder.typicode.com/posts", {
    method : "POST",
    // headers : {
    //     "content-type" : "application/json; charset = UTF-8"
    // },//axios automatically identify the headers and send it automatically
    body : JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    })
})
.then((response) => console.log(response.data))
.catch((err) => console.log(err));


//PUT:
axios.put("https://jsonplaceholder.typicode.com/posts/1", {
    method : "PUT",
    body : JSON.stringify({
        id: 1,
        title: 'foooooo',
        body: 'barrrrrr',
        userId: 1
    })
})
.then((response) => console.log(response.data))
.catch((err) => console.log(err));


//PATCH:
axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
    method : "PATCH",
    body : JSON.stringify({
        title : 'fooma',
        body : 'barma'
    })
})
.then((response) => console.log(response.data))
.catch((err) => console.log(err));

//DELETE:
axios.delete("https://jsonplaceholder.typicode.com/posts/1", {
    method : "DELETE"
})
.then((response) => console.log(response.data))
.catch((err) => console.log(err));








