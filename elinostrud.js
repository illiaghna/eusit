function toBinary(n) {
    if (Number.isInteger(n)) {
        return n.toString(2);
    } else {
        throw new Error("Input must be an integer.");
    }
}

// Example usage
let number = 10;
let binaryRepresentation = toBinary(number);
console.log(binaryRepresentation);  // Output: "1010"
