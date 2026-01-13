

let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    if (codeValue === 'html' ) {
    console.log ("detected html");
    document.getElementById("topics").innerHTML = "Deleted"}
    if (codeValue === 'css') {
        console.log ("detected css");
        document.getElementById("myH1").style.color = "red"
    }
    if (codeValue === 'js') {
        console.log("detected JS")
        document.getElementById("content").style.color = "blue"
        document.getElementById("content").style.backgroundColor = "red"
    }
});



                          


