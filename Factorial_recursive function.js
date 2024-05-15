function factorial(n) {
    1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: factorial of n is n times factorial of (n-1)
    else {
        return n * factorial(n - 1);
    }
}

// Test the function
console.log(factorial(5)); 