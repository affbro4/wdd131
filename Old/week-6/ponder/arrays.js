
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape','stawbery', 'pineapple'];


const students = [
    {last: 'Andrus', first: 'Aaron', grade: 'A'},
    {last: 'Masa', first:'Manny', grade: 'B'},
    {last: 'Tanda', first: 'Tamanda', grade: 'C'},
];
          

function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

const displayList = document.querySelector("#student-list");

students.forEach((student, index) => { 
    const pointValue = convert(student.grade);
    const li = document.createElement('li');
    console.log(`[${index}] = ${student.first} ${student.last}: ${pointValue} points`);
    li.textContent = `${student.first} ${student.last}: ${pointValue} points`;
    
    
    displayList.appendChild(li);
});


const fruitElements = document.getElementById('fruit');

words.forEach((fruit) => {
    const listItem = document.createElement('li');
    listItem.textContent = fruit;
    fruitElements.appendChild(listItem);
    console.log(fruit)
    
});


let html = '';

words.forEach((fruit) => {
    html += `<li>${fruit}</li>`;
});

fruitElements.innerHTML = html;