let trivia = ["love","just dance","seesaw","levitating"];
console.log(trivia);
console.log(typeof trivia);
console.log("This access the first letter (index) of the first element of the array", trivia[0][0]);

let mix = ["Sam", 456, 6.8];
console.log("This is a mixed Array", mix);

let emp = [];
console.log("Thisis an empty array", emp.length);


let change = [2,3,4,6,7];
console.log("This is the original array");
console.log(change);
change[1] = 10;
console.log(change);
change[10] = 356;
console.log(change);

let songs=[1,2,3,4,5,6,7,8];
console.log(songs);
songs.push(23);
console.log(songs);
songs.pop();
console.log(songs);
songs.unshift(0);
console.log(songs);
songs.shift();
console.log(songs);

let color = ["red","blue","green"];
console.log(color);
console.log("the index of 'blue' is", color.indexOf("blue"));
console.log("the index of 'yellow' is", color.indexOf("yellow"));
console.log("the length of the array is", color.length);
console.log("This array includes 'green'", color.includes("green"));
console.log("This array includes 'purple'", color.includes("purple"));

let color2 = ["pink", "purple", "magenta"];
console.log(color2);
console.log("The combination of both arrays is", color.concat(color2));
console.log("The reverse of the array is", (color.concat(color2)).reverse());

let colors = color.concat(color2);
console.log("Slice of the array is ", colors.slice(0,4));
console.log("backwards slice", colors.slice(-3));

colors.splice(1,2,"white","grey");
console.log("After splicing, the array is", colors);

