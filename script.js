// Mushroom Shop - JavaScript Code

// Function to handle form validation
function validateForm() {
    const form = document.forms["contactForm"];
    const name = form["name"].value.trim();
    const amount = form["amount"].value.trim();
    const number = form["number"].value.trim();
    const address = form["address"].value.trim();

    if (!name || !amount || !number || !address) {
        alert("All fields must be filled out.");
        return false;
    }

    if (!isValidAmount(amount)) {
        alert("Amount of mushrooms must be a positive number.");
        return false;
    }

    if (!isValidPhoneNumber(number)) {
        alert("Mobile number must be a valid 10-digit number.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

// Helper function to validate amount
function isValidAmount(amount) {
    const amountValue = parseFloat(amount);
    return !isNaN(amountValue) && amountValue > 0;
}

// Helper function to validate phone number
function isValidPhoneNumber(number) {
    return /^\d{10}$/.test(number);
}

// Event listener for 'Contact Us' button
document.getElementById("contact").addEventListener("click", () => {
    alert("Please call us at +91 1234567899");
});

// Event listener for 'Email Us' button
document.getElementById("email").addEventListener("click", () => {
    window.location.href = "mailto:sinhaaman2180@gmail.com";
});

// Event listener for form reset
document.getElementById("reset").addEventListener("click", () => {
    document.forms["contactForm"].reset();
    alert("Form reset successfully!");
});

// Event listener for 'Order Now' button
document.querySelector(".order").addEventListener("click", () => {
    alert("Thank you for your order! We will contact you soon.");
});
