function power(b, exp) {
    if (exp == 0){
        return 1
    }
    if (exp == 1){
        return b
    }
    if (exp > 1){
        return b * power(b, exp - 1)
    }
}

console.log (power(2,1))