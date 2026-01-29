function door(state) {

    switch (state) {
        case 0: 
            return "Closed";
        case 1:
            return "Open";
        default:
            return "Invalid state"
    }
}

function fruitColor(fruit) {
    let color = "unknown";
    switch (fruit) {
        case "apple":
        case "cherry":
        case "strawberry":
            return color = "red";
        
    }

}