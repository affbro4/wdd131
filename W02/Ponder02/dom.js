// Select an HTML element from the DOM 
// Save it to a local variable called heading 
let heading = document.querySelector("h1");

console.log(heading);

heading.style.color = "blue";
heading.style.fontSize = "3em";
heading.style.backgroundColor = "black";
heading.style.border ="2px solid blue";
heading.style.textDecoration = "underline wavy";
//CSS: font-size

// Challenge: CHange something else yourself 

// do everything one line 
document.querySelector("p").style.color = "blue";


// there are different ways to select from the DOM

document.getElementById("topics");

// you can select more than one element at a time 


// apply a class to an element 
let topicsClassList = document.querySelector("#topics").classList;

topicsClassList.add("special");
topicsClassList.toggle("special");



let selectElem = document.getElementById('webdevlist');

selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    heading.textContent = codeValue;
})
                

                