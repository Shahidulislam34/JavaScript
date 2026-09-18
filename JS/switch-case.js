var dig = Number(prompt("Enter a digit:"));

console.log("Without break:");//work matching and all after matching statement
switch(dig) {
    case 0:
        console.log("Zero");
    case 1: 
        console.log("One");
    case 2: 
        console.log("Two");
    case 3: 
        console.log("Three");
    case 4: 
        console.log("Four");
    case 5: 
        console.log("Five");
    case 6: 
        console.log("Six");
    case 7: 
        console.log("Seven");
    case 8: 
        console.log("Eight");
    case 9: 
        console.log("Nine");
    default:
        console.log("Don't Match");
    
}

console.log("Using break:");//only matching statement works
switch(dig) {
    case 0:
        console.log("Zero");
        break;
    case 1: 
        console.log("One");
        break;
    case 2: 
        console.log("Two");
        break;
    case 3: 
        console.log("Three");
        break;
    case 4: 
        console.log("Four");
        break;
    case 5: 
        console.log("Five");
        break;
    case 6: 
        console.log("Six");
        break;
    case 7: 
        console.log("Seven");
        break;
    case 8: 
        console.log("Eight");
        break;
    case 9: 
        console.log("Nine");
        break;
    default:
        console.log("Don't Match");
}