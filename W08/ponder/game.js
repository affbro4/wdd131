    // 1. click on button
document.querySelector('#rollButton').addEventListener("click", e => {
    // 2. animate the die 
    setDieImages("assets/die_rolling.gif");
    // 3. land on a new random number 
    setTimeout(() => {
        // this function will run after the timeout duration below
        setDieImages("assets/white_dice_6.gif");
        document.querySelectorAll('#gameboard img').forEach(image =>{
            const randomNumber = Math.ceil(Math.random() *6);
            image.src = `assets/white_dice_${randomNumber}.gif`;
        });     
    }, 1000);
});


function setDieImages(imagePath){
    document.querySelectorAll('#gameboard img').forEach(image => {
        image.src = imagePath;
    });
}

function isDieUnlocked(dieImage) {
    return Array.from(document.querySelectorAll('#gameboard input'))
        .filter(checkbox => !checkbox.checked)
        .find(unchecked => unchecked.className === dieImage.className);
}

    