
const form = document.querySelector("#eventForm");
const type = document.querySelector("#type");
const output = document.querySelector("#output");
const studentField = document.querySelector(".studentNum");
const codeField = document.querySelector(".code");
const studentNumber = document.querySelector("#studentNumber");
const accessCode = document.querySelector("#code");

// Hide the fields when the page first loads
studentField.style.display = "none";
codeField.style.display = "none";

// Show the correct fields depending on the ticket type
type.addEventListener("change", function () {
    if (type.value === "student") {
        studentField.style.display = "flex";
        codeField.style.display = "none";

        studentNumber.required = true;
        accessCode.required = false;
    } 
    else if (type.value === "guest") {
        studentField.style.display = "none";
        codeField.style.display = "flex";

        studentNumber.required = false;
        accessCode.required = true;
    } 
    else {
        studentField.style.display = "none";
        codeField.style.display = "none";

        studentNumber.required = false;
        accessCode.required = false;
    }
});

// Get today's date
function isPastDate(value) {
    const today = new Date();
    const todayString = 
        `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

    return value < todayString;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const ticketType = type.value;
    const date = form.date.value;

    // Get the student number and access code
    const studentID = studentNumber.value.trim();
    const code = accessCode.value.trim();

    // Check the date
    if (isPastDate(date)) {
        output.textContent = "Please choose a later date.";
        return;
    }

    // Check the guest access code
    if (ticketType === "guest" && code !== "EVENT131") {
        output.textContent = "Invalid Access Code. Please enter EVENT131.";
        return;
    }

    // Check the student ID
    if (ticketType === "student" && !/^\d{9}$/.test(studentID)) {
        output.textContent = "Student ID must be exactly 9 digits.";
        return;
    }

    // Create the ticket
    output.innerHTML = `
        <h2>Ticket Created</h2>
        <p>${firstName} ${lastName}</p>
        <p>${email}</p>
        <p>${ticketType}</p>
        <p>${date}</p>
    `;

    form.reset();

    // Hide conditional fields after resetting
    studentField.style.display = "none";
    codeField.style.display = "none";
});
