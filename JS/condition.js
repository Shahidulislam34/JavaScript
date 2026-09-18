let num = Number(prompt("Enter your number: "));
if (num >= 80) console.log("A+");
else if (num < 80 && num >= 70) console.log("A");
else if (num < 70 && num >= 60) console.log("A-");
else if (num < 60 && num >= 50) console.log("B");
else if (num < 50 && num >= 40) console.log("C");
else if (num < 40 && num >= 33) console.log("D");
else console.log("Fail");


let ch = prompt("Enter a letter:");
console.log(typeof(ch));//print string
if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
    console.log(`${ch} is a viowel`);
else console.log(`${ch} is a consonent`);