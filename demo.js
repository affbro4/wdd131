const jumbledLetters = ['e', 'l', 'z', 'o', 'w', 'r', 'd']
jumbledLetters.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a < b) {
        return -1;
    } else if (a > b){
        return 1;
    } 
    return 0

});


const bookOfMormonChapter = [
    
]


console.log(jumbledLetters.join(', '))