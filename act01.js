function factorial(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return n;
    } 
    if (n > 1) {
    return factorial (n - 1) * n
    }
}

console.log(factorial(5));