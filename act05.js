function countDigits(num) {
    if (num < 10) {
        return 1
    }
    else {
        return 1 + countDigits (num / 10)
    }
}



console.log (countDigits(123))