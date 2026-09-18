//Function parameter or event object:
// event (বা সংক্ষিপ্ত নাম e) হলো একটি বিশেষ প্যারামিটার যা ব্রাউজার অন-ক্লিক বা অন-চেঞ্জের 
// মতো ইভেন্ট ঘটার সাথে সাথে স্বয়ংক্রিয়ভাবে আপনার ফাংশনে পাঠায়।
// ১. event আমরা কেন ব্যবহার করি?যখন কোনো ব্রাউজার ইভেন্ট (যেমন: মাউস ক্লিক, কি-বোর্ড টাইপ, ড্রপডাউন সিলেক্ট) ঘটে,
//  তখন ব্রাউজার সেই ঘটনাটির সমস্ত বিস্তারিত তথ্য একটি অবজেক্ট আকারে তৈরি করে।ফাংশনে event প্যারামিটারটি লিখলে 
// আমরা ওই তথ্যের অ্যাক্সেস পাই। 
// ২. এটি কি দেওয়া বাধ্যতামূলক (দিতেই হবে)?না, এটি দেওয়া বাধ্যতামূলক নয়।
// যদি ইভেন্টের কোনো তথ্যের (যেমন: value বা preventDefault) প্রয়োজন আপনার না থাকে, 
// তবে আপনি এটি নাও লিখতে পারেন।
// Parameter-এর নাম যেকোনো কিছু দেওয়া যায়। event-ই দিতে হবে, এমন নয়।


// Input field focus হারালে এবং value পরিবর্তন হলে,automatically তখনই fire হবে।
let myInput = document.querySelector("#name-input");
myInput.addEventListener("change", function(event){
    console.log(event);
    console.log("Type:" + event.type);
    console.log("Target:" + event.target);//target—যা সরাসরি উক্ত HTML এলিমেন্টটিকে নির্দেশ করে।
    console.log("Id:" + event.target.id);
    console.log("Class:" + event.target.className);
    console.log("Value:" + event.target.value);
});


let programs = document.querySelectorAll("input[name = program");
let arr = Array.from(programs);
arr.map((program) => {
    program.addEventListener("change", function(event){
        //অন্য সব চেকবাক্স থেকে টিক চিহ্ন সরিয়ে ফেলা
        Array.from(programs).map((prog) =>{
            if (prog != event.target) 
                prog.checked = false;// এখানে সরাসরি element থেকে checked চেক করা হয়েছে, তাই target লাগবে না।
        });
        if (event.target.checked)
            console.log(event.target.value);
    });
});
// একটিমাত্র আইটেম সিলেক্ট করার ক্ষেত্রে HTML-এর Radio Button ব্যবহার করাই সবচেয়ে আদর্শ স্ট্যান্ডার্ড।


let depts = document.querySelector("#department");
depts.addEventListener("change", function(event){
    console.log(event.target.value);
})
