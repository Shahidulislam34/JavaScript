let date = new Date();//create date object

console.log(date);

let year = date.getFullYear();
console.log(year);

let currentMonth = date.getMonth();
console.log("Month Index:" + currentMonth);//january = 0, february = 1,........

let currentDate = date.getDate();
console.log("Month Day Index:" + currentDate);//start with 1. 1,2,3,4,......27, 28.....

let currentDay = date.getDay();
console.log("Day Index:" + currentDay);//Sunday = 0, Monday = 1, ......

let currentHours = date.getHours();
console.log("Current hours:" + currentHours);

let currentMinutes = date.getMinutes();
console.log("Current Minutes:" + currentMinutes);

let currentSeconds = date.getSeconds();
console.log("Current Seconds:" + currentSeconds);

let currentMilliSeconds = date.getMilliseconds();
console.log("Current MilliSeconds:" + currentMilliSeconds);

