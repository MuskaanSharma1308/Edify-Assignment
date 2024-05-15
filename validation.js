// Define validation rules
const validationRules = {
    text: /^[a-zA-Z\s]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    mobile: /^\+91\d{10}$/,
   
    text: /^[^\d]+$/,
    
};

// Validation function
function validateInput(input, type) {
    const regex = validationRules[type];
    if (!regex) {
        throw new Error(`Validation rule not defined for type: ${type}`);
    }
    return regex.test(input);
}

// Example usage
const userInput = "+911234567890"; // Example mobile number
const inputType = "mobile";
const isValid = validateInput(userInput, inputType);
console.log(`Is ${userInput} a valid ${inputType}? ${isValid}`);
