let a = [2,4,6,8,0];
console.log("Answer to Q1", a.slice(3));
console.log("Answer to Q2", a.slice(-3));

let str = ' ';
let str2 = 'Bachelor';
if (str=null)
{
    console.log("The string is not empty");
}
else{
    console.log("This string is empty");
}

if(str2){
    console.log("This is not an empty string");
}
else{
    console.log("This is an empty string.");
}

let game = "LuDo";
let ind = 2;
if (game[ind]== game[ind].toLowerCase){
    console.log("The character is lowercase");
}
else{
    console.log("The character is not lowercase.");
}

let goku = "   HoneyPie   ";
console.log(goku.trim());

let arr = ['s', 'a', 'b', 'e', 'n', 'l'];
console.log("The array inclues v",arr.includes('v'));
console.log("The array includes a",arr.includes('a'));