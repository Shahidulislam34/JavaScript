try{
    console.log("Before Error");

    // console.log(x);

    // let y = 23434;
    // console.log(y.toUpperCase());//Type error: number can not be converted into upper case.
    
    let arr = new Array(-5);//RangeError: Invalid array length

    console.log("After Error");
    console.log("Must be executed");
}catch(err) {
    console.log("Catch block is executed");
    console.log(err);
    console.log(err.name);
    console.log(err.message);
}finally{
    console.log("Must be executed");
}

/*
JavaScript-এ try...catch...finally হলো এমন একটি ব্লক যা কোডে অপ্রত্যাশিত কোনো এরর (Error) বা 
ভুল আসলেও যাতে প্রোগ্রামটি হঠাৎ বন্ধ (Crash) না হয়ে সুন্দরভাবে কাজ চালিয়ে যেতে পারে, তা নিশ্চিত করে।

ব্লকের ৩টি অংশের ভূমিকা
try ব্লক: যেখানে আপনি আপনার মূল কোডটি লিখবেন। JavaScript ইঞ্জিন প্রথমে এই ব্লকের কোড এক্সিকিউট করার চেষ্টা করে। 
যদি কোনো সমস্যা না থাকে, তবে কোড স্বাভাবিকভাবে শেষ হয়।

catch ব্লক: try ব্লকে কোনো এরর ঘটলেই কোডের এক্সিকিউশন সাথে সাথে বন্ধ হয়ে catch ব্লকে চলে যায়। এটি এররটি গ্রহণ করে এবং 
অ্যাপ্লিকেশনে ক্র্যাশ হওয়া ঠেকায়। 
catch-এর প্যারামিটার সবসময় লাগে না।
ES2019 থেকে এটি একদম বৈধ কোড:
try {
    let data = JSON.parse(userInput);
} catch {
    // এখানে কোনো (error) ব্র্যাকেট দেওয়া হয়নি
    console.log("ইনপুট ডাটা সঠিক ফরম্যাটে নেই!");
}
catch এ কখন প্যারামিটার ব্যবহার করা আবশ্যক?
-যখন আপনার এররের কারণ জানা বা লগ রেকর্ড করা প্রয়োজন হয়


finally ব্লক:  প্রোগ্রামিংয়ে বেশিরভাগ সময় শুধু try...catch ব্যবহার করেই এরর হ্যান্ডেল করা হয়। finally ব্লক মূলত একটি ঐচ্ছিক (Optional) ফিচার। Use যদি করা হয় তাহলে try ব্লকে এরর আসুক বা না আসুক—এই ব্লকটি ১০০% অবশ্যই রান করবেই। সাধারণত কোনো ফাইল বন্ধ করা, 
ডাটাবেজ কানেকশন ক্লোজ করা বা লোডার বন্ধ করার মতো পরিষ্কার-পরিচ্ছন্নতার (Cleanup) কাজে এটি ব্যবহৃত হয়।


যদি finally ব্লকের ভেতরেও কোনো এরর চলে আসে, তবে সেটি সেই মুহূর্তেই এক্সিকিউশনকে থামিয়ে দেবে এবং 
আনহ্যান্ডেল্ড এরর (Unhandled Error) হিসেবে অ্যাপ্লিকেশনে ক্র্যাশ ঘটাব।

তখন কী ঘটবে এবং কীভাবে তা সামলাবেন, তা নিচে আলোচনা করা হলো:
১. কী ঘটে যখন finally-তে এরর আসে?
আগের এরর বা রিটার্ন মুছে যায়: যদি try বা catch ব্লকে কোনো এরর বা return স্টেটমেন্ট থেকে থাকে, 
finally-র ভেতর নতুন এরর তৈরি হওয়া মাত্রই আগের সবকিছু ওভাররাইড (Override) হয়ে যায়।

প্রোগ্রাম থমকে যায়: যদি finally-র ভেতরের এররটি হ্যান্ডেল না করা থাকে, তবে অ্যাপ্লিকেশনের রানটাইম আটকে যায় (Unhandled Exception)।

try {
    console.log("১. Try ব্লকের কোড");
    throw new Error("Try-এর এরর");
} catch (err) {
    console.log("২. Catch ব্লকের কোড:", err.message);
} finally {
    console.log("৩. Finally ব্লকের কাজ শুরু");
    
    // এখানে একটি নতুন এরর তৈরি হলো (x ডিক্লেয়ার করা নেই)
    console.log(x); 
    
    console.log("৪. এই লাইনটি আর কখনোই রান হবে না!");
}

২. কেন finally-তে এরর আসা বিপজ্জনক?
ধরুন, try ব্লকে একটি গুরুত্বপূর্ণ এরর হয়েছে যা আপনি catch-এ হ্যান্ডেল করার চেষ্টা করছিলেন। 
কিন্তু finally-র ভেতরে অন্য একটি এরর আসার কারণে মূল এররটি হাইড (অদৃশ্য) হয়ে যায়। 
ফলে ডিবাগ করার সময় মূল সমস্যা চিহ্নিত করা কঠিন হয়ে পড়ে।

৩. কীভাবে সামলাবেন (Best Practices)?
ক. finally ব্লককে যতদূর সম্ভব নিরাপদ (Safe) ও সাধারণ রাখুন
finally ব্লকে ভারী বা ঝুঁকিপূর্ণ কোড (যেমন: API কল বা জটিল অপারেশন) না লিখে শুধু রিসোর্স ফ্রি বা 
ক্লিনআপের কাজ (যেমন: loader.hide(), connection.close()) করা উচিত।

খ. প্রয়োজনে finally-র ভেতরে আরেকটি try...catch ব্যবহার করুন
যদি finally-র ভেতরের কোডে এরর হওয়ার কোনো সুযোগ থাকে, তবে সেটিকে ভেতরেই ছোট একটি try...catch দিয়ে ঘিরে ফেলুন:

try {
    // মূল কাজ
} catch (err) {
    console.log("Main Catch:", err.message);
} finally {
    try {
        // ঝুঁকিপূর্ণ ক্লিনআপ কাজ
        closeConnection(); 
    } catch (finallyErr) {
        console.log("Finally-র এরর হ্যান্ডেল করা হলো:", finallyErr.message);
    }
}



*/

/*
JavaScript-এ try...catch মূলত Runtime Errors (কোড চলার সময় হওয়া ভুলগুলো) হ্যান্ডেল করতে পারে।
নিচে কোন কোন ধরনের এরর হ্যান্ডেল করতে পারে এবং কোনগুলো পারে না, তা ব্যাখ্যা করা হলো:

১. যেসব Error try...catch হ্যান্ডেল করতে পারে:
Reference Error
TypeError
RangeError


২. যেসব Error try...catch হ্যান্ডেল করতে পারে না:
ক. Parse / Syntax Errors (কোডের গ্রামার ভুল):
এটি try...catch দিয়ে আটকানো যাবে না:
try {
    let x = ; // SyntaxError: unexpected token ';'
} catch (err) {
    console.log("ধরা পড়বে না");
}

খ. Asynchronous Code-এর ভেতরের এরর
setTimeout, setInterval বা ইভেন্ট লিসেনারের ভেতরের কোড সাথে সাথে রান হয় না। তাই বাইরের try...catch অ্যাসিনক্রোনাস ব্লকের এরর ধরতে পারে না।
কাজ করবে না:
try {
    setTimeout(() => {
        noSuchVariable; // এররটি এখানে হবে
    }, 1000);
} catch (err) {
    console.log("এই catch-এ আসবে না!");
}

সমাধান: অ্যাসিনক্রোনাস কাজ হ্যান্ডেল করতে হলে try...catch-কে ফাংশনের ভেতরের ব্লকে রাখতে হয়, অথবা async/await ব্যবহার করতে হয়:

সঠিক নিয়ম:
setTimeout(() => {
    try {
        noSuchVariable;
    } catch (err) {
        console.log("এখন ধরা পড়বে:", err.message);
    }
}, 1000);

*/