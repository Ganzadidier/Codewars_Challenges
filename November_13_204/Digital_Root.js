function digitalRoot(n) {
    // Calculate the digital root recursively
    while (n >= 10) {  // Continue until n is a single digit
        n = String(n)
            .split('')
            .map(Number)
            .reduce((a, b) => a + b, 0);
    }
    return n;
}

console.log(digitalRoot(690788))