const stats = {
    level: 5,
    health: 0
}
stats.health = stats.level * 20;

function statTemplate(stat) {
    return `
    <p><strong>Class: </strong>Swamp Beast Diplomat </p>
            <p><strong>Level: ${stat.level}</strong></p>
            <p><strong>Health: ${stat.health}</strong></p>
    `
}
document.querySelector(".stats").innerHTML =statTemplate(stats);

document.querySelector("#attacked").addEventListener("click", function (){
    stats.health = stats.health -20;

   
    if (stats.health <= 0) {
        
        stats.health = 0;
        alert("Your character has died!");
    }

    document.querySelector(".stats").innerHTML = statTemplate(stats);

});


document.querySelector("#level").addEventListener("click", function (){
    stats.level++;
    stats.health = stats.level *20;
    document.querySelector(".stats").innerHTML = statTemplate(stats);

});