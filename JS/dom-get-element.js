// DOM(Document Object Model):
// DOM-এর মূল কাজ কী?
// DOM ব্যবহার করে JavaScript পেজের যেকোনো কিছু পরিবর্তন করতে পারে:
// HTML Element পরিবর্তন: কোনো ট্যাগের লেখা, ছবি বা লিঙ্ক বদলে ফেলা।
// CSS Style পরিবর্তন: ব্যাকগ্রাউন্ড কালার, ফন্ট সাইজ ইত্যাদি ডাইনামিক্যালি পরিবর্তন করা।
// Element যোগ বা মুছে ফেলা: নতুন HTML ট্যাগ তৈরি বা পুরোনো ট্যাগ রিমুভ করা।
// Event Handling: ইউজার কোনো বোতামে ক্লিক করলে, স্ক্রোল করলে বা কীবোর্ডে টাইপ করলে তার ওপর ভিত্তি করে কাজ করা।

//Get single element using Id
document.getElementById("project-name").innerHTML = "MBSTU Hall Management";

//Get multiple elements using ClassName: multiple, ae jonno akhane must index bole dite hoi otherwise kaj korbe nah
document.getElementsByClassName("hall-name")[0].innerHTML = "Birsresto Shahid Abrar Fahad Hall";

//Get multiple elements using TagName: multiple, ae jonno akhane must index bole dite hoi otherwise kaj korbe nah
var usingTag = document.getElementsByTagName("p");//Use Double quotation to write tag name
usingTag[0].innerHTML = "I am Shahidul Islam Shourov from room no-612";