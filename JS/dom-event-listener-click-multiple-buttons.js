var button1 = document.querySelector("#click-buttons");
var myTitle = document.querySelector("#button-title");

/*
button1.children[0].addEventListener("click", function(){
    var content = "Clicked " + this.innerHTML;
    myTitle.innerHTML = content;
})
button1.children[1].addEventListener("click", function(){
    var content = "Clicked " + this.innerHTML;
    myTitle.innerHTML = content;
})
button1.children[2].addEventListener("click", function(){
    var content = "Clicked " + this.innerHTML;
    myTitle.innerHTML = content;
})
*/

//Easy way:
let numOfButton = document.querySelector("#click-buttons").children.length;
for (var i = 0; i <= numOfButton; ++i) {
        button1.children[i].addEventListener("click", function(){
            var content = this.innerHTML + " is clicked";
            myTitle.innerHTML = content;
    });
}

/*
বাটনে ক্লিক করার সময় for লুপটি আর চলে না—শুধুমাত্র যে বাটনে ক্লিক করেছেন তার ভেতরের অন-ক্লিক (Anonymus) ফাংশনটি এক্সিকিউট হয়।

ঘটনাটি যেভাবে ঘটে (Step-by-Step):
১. পেজ লোড হওয়ার সময় (Loop Processing Phase):
ব্রাউজার যখন কোডটি প্রথমবার রান করে, তখন for লুপটি শুরু থেকে শেষ পর্যন্ত (i = 0, 1, 2) ৩ বার ঘোরে।
এই লুপের কাজ হলো ৩টি বাটনের সাথেই একটি করে Listener ("Click Event Handler") বেঁধে বা রেজিস্টার করে রাখা।
লুপের কাজ শেষ হওয়ার পর লুপ কিন্তু সম্পূর্ণ বন্ধ হয়ে যায়।

২. বাটনে ক্লিক করার সময় (Event Execution Phase):
পরবর্তীতে যখন আপনি কোনো নির্দিষ্ট বাটনে ক্লিক করেন, তখন কিন্তু লুপ নতুন করে ঘোরে না।
ব্রাউজার শুধু দেখে: "কোন বাটনে ক্লিক হয়েছে?"
যে বাটনে ক্লিক হয়েছে, ব্রাউজার সরাসরি শুধু সেই বাটনে যুক্ত করে রাখা নির্দিষ্ট function(){ ... }-টি কল করে এবং this.innerHTML দিয়ে তার কনটেন্ট সেট করে দেয়।
*/






