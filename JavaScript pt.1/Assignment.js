let num = 23;
if(num%10 == 0){
    console.log("good");
}
else{
    console.log("bad");
}

let name = prompt("Enter your name");
let age = prompt("Enter your age");
alert(`${name} is ${age} years old`);

let quater = 2;
switch(quater){
    case 1:
        console.log("January, February, MArch");
        break;
    case 2:
        console.log("April, MAy, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
            console.log("Invalid quater");
}

let string = "Adasta";
if ((string[0] == "A" || string[0] == "a") && (string.length > 5)) {
    console.log("This is a GOLDEN String");
}
else{
    console.log("This is not a GOLDEN String");
}

let a = 3;
let b = 7;
let c = 9;
if(a>b && a>c){
    console.log(`${a} is the greatest number`);
}
else if (b>a && b>c){
    console.log(`${b} is the greatest number`);
}
else{
    console.log(`${c} is the greatest number`);
}

let num1 = 45;
let num2 = 75;
 
if(num1%10 == num2%10){
    console.log(`${num1} and ${num2} have the same last digit`);
}
else{
    console.log("They don't have the same last digit")
}