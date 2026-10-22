// arrays in javascript

let courses = ["WDD131", "WDD130", "CSE110", "CSE220"];

// Display the first course 
console.log(courses[0]);
console.log(courses[3]);
console.log(courses[courses.length -1]);

//normal for 1 loop
for(let i = 0; i< courses.length; i++){
    console.log(courses[i]);
}

// array methods/functions 
courses.forEach((item) => {
    console.log(item);
});

let course = {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 3,
    instructor: "Brother Warner"
}

console.log(course.instructor);

// array of objects 

let courseArrayOfObjects = [
    {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 2,
    instructor: "Brother Warner"
    },
    {
    name: "Web Fundamentals",
    code: "WDD130",
    credits: 2,
    instructor: "Brother Warner"
    }

];
// Challenge: Print out the name and code of the second course in this array 

console.log(courseArrayOfObjects[1].name);

let body = document.querySelector('body');

courseArrayOfObjects.forEach((item) => {
    // build out an HTML div with courses contents 
    let courseDiv = `
        <div>
            <h2>${course.name} </h2>
            <p>Code: ${course.code} </p>
            <p>Credits: ${course.credits} </p>
            <p>Instructor: ${course.instructor} </p>

        </div>
    `;
    // add that div to the body 
    body.innerHTML += courseDiv;
});