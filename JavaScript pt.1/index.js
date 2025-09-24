let popcorn = "XL";
if(popcorn === "S"){
    console.log("The price of the popcorn is ₹50")
}
else if(popcorn === "M"){
    console.log("The price of the popcorn is ₹100");
}
else if(popcorn === "L"){
    console.log("The price of the popcorn is ₹200");
}
else if(popcorn === "XL"){
    console.log("The price of the popcorn is 250");
}

let marks = 81;
if(marks >= 33){
    if(marks <= 40){
        console.log("You are mediocre");
    }
    else if (marks >= 80 || marks < 90){
        console.log("Congratulations! You are an outstanding Student");
    }
    else if(marks >=90){
        console.log("You are a prodigy");
    }
    else{
        console.log("Eh! You are just Average")
    }
}
else{
    console.log("Better Luck next time.")
}