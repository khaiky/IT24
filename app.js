//Data Types

let num = 10;
let str = "Hello love";
let isActive = true;

console.log("Data Types:");
console.log("Number:",num);
console.log("String:",str);
console.log("Boolean:",isActive);
console.log("----------------------------");
//Arithmetic and Logical Operators

let a = 5;
let b = 3;

console.log("\nArithmetic Operators:");
console.log("Addition:", a+b);
console.log("Subtraction:",a-b);
console.log("Multiplication:",a*b);
console.log("Division:", a/b);
console.log("Modulos:", a%b);

console.log("----------------------------------");
//Logical Operators


console.log("\nLogical Operators:");
console.log("a>b && a != b;", a>b & a!= b);
console.log("a>b || a == b:", a>b || a == b);
console.log("!(a>b):",!(a>b));

console.log("----------------------------------");
//conditional statement


console.log("\nConditional Statement:");

//if else
let age =17;
if(age >= 18){
    console.log("You are an Adult");
} else {
    console.log("You are a Minor");
}
console.log("----------------------------------");
//Switch

let season = 4;

switch (season) {
    case 1:
        console.log("Winter");
        break;
    case 2:
        console.log("Autumn");
        break;
    case 3:
        console.log("Summer");
        break;
    case 4:
        console.log("Spring");
        break;
    default:
        console.log("Error, way laing season di mag taka takag tuplok.");
}
console.log("----------------------------------");
//loops
//For Loop

for(let i = 0; i<5; i++){
    console.log(i);
}
console.log("----------------------------------");
//while loop

let count = 0;
while (count < 5){
    console.log(count);
    count++;
}
console.log("----------------------------------");
//functioning Programming

function isOddorEven(number){
return number %2 === 0? "Even" : "Odd";
}
console.log("\nOddorEven:");
console.log("Number 7 is", isOddorEven(7));
console.log("Number 10 is", isOddorEven(10));

console.log("----------------------------------");
//Determine is a number is a Prime number

function isPrime(num){
    if(num <= 1) return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0) return false;
    }
    return true;
}
console.log("\nPrime Check:");
console.log("Number 11 is", isPrime(11)? "Prime" : "Not Prime" );
console.log("Number 4 is", isPrime(4)? "Prime" : "Not Prime" );

console.log("----------------------------------");
//Determine if a string is a palindrome

function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    // Check if the cleaned string is equal to its reverse
    let reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}
console.log("----------------------------------");

console.log("\nPalindrome Check");
console.log('"Madam" is', isPalindrome("madam")? "A Palindrome" : "Not a Palindrome");
console.log('"Hello" is', isPalindrome("Hello")? "A Palindrome" : "Not a Palindrome");
