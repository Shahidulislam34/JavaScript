/*
querySelector ব্যবহার করার প্রধান কারণগুলো হলো:
    CSS Selector দিয়ে সরাসরি কাজ করা: ID (#id), Class (.class), Tag (h1), এমনকি Attribute ([type="text"]) — যেকোনো CSS সেলেক্টর দিয়েই Element ধরা যায়।
    কম কোড লেখার সুবিধা: একাধিক আলাদা মেথড (getElementById, getElementsByClassName) মনে না রেখে শুধু একটি মেথডেই সব ধরনের Search কাজ চালানো যায়।
    Complex Selector সাপোর্ট: জটিল বা Nested Element সহজে ধরা যায় (যেমন: document.querySelector(".card h2"))।
    querySelector ব্যবহার করার সময় কোনো Index ([0], [1]) দিতে হয় না।
    কারণ querySelector পুরো HTML ডকুমেন্টে খোঁজাখুঁজি করে সবচেয়ে প্রথমে পাওয়া মাত্র ১ম Element-টিকে সরাসরি রিটার্ন করে।
    querySelectorAll সব আনবে, নির্দিষ্ট একটা বেছে নিতে Index দিতে হবে।
    */

document.querySelector("#project-name").innerHTML = "MBSTU Hall Management";


document.querySelector(".hall-name").innerHTML = "Birsresto Shahid Abrar Fahad Hall";


document.querySelector("p").innerHTML = "I am Shahidul Islam Shourov from room no-612";

document.querySelectorAll("p")[1].innerHTML = "I am Ariful Islam from room no-612";

//ID, class, tag ইত্যাদি একইভাবে সিলেক্ট করা যায়। ID-এর জন্য # এবং class-এর জন্য . ব্যবহার করতে হবে।
document.querySelectorAll("ul li")[0].innerHTML = "Object Oriented Programming";
document.querySelectorAll("ul li")[1].innerHTML = "Database Management System";
document.querySelectorAll("ul li")[2].innerHTML = "Computer Architecture and Networking";
