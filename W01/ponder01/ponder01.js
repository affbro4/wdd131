let age = 23;
let name = "Andrew";

// This is like print in Python
/* Multiline comment 
in javascript */

console.log(age);


age = 24

console.log(age);


const eyeColor = "blue"; 
let favoriteColor = "";
// scope is where variables can be referenced 
if(age == 24) {
    // we are now in a different scope 
    // inside this scope, we can reference variables declared outside this scope 
    console.log(name);
    // declare a variable in an inner scope 
    favoriteColor = "blue";
}

console.log(favoriteColor)

// pull something from the HTML page
document.querySelector("h1").style.color = favoriteColor; 


const PI = 3.14;
let radius = 3;

const one = 1;
const two = '2';

let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                    


