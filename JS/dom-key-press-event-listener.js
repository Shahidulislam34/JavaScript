// পুরো document-এর জন্য: যেকোনো জায়গায় key press করলেই কাজ করবে। অন্য কোনো tag-এর মধ্যে লিখলেও এখানে কাজ করবে।
document.addEventListener("keypress", function(event){// Function-এ সবসময় একটি parameter থাকে, যেখানে pressed key-টি সংরক্ষিত থাকে।
    let pressed = event.key;
    document.querySelector("#key-press").innerHTML = "Successfully press the key : " + pressed;
});

// শুধুমাত্র textarea ফিল্ডের জন্য: যখন textarea ফিল্ডে লিখব, তখনই কাজ করবে।let numOfChar = 0;
let numOfChar = 0;
document.querySelector("#text-area").addEventListener("keypress", function(event){
    let pressedKey = event.key;
    ++numOfChar;
    document.querySelector("#num-of-char").innerHTML = "Number of characters: " + numOfChar;
});