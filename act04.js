function reverseString(str) {
    if (str === "") {
        return true; 
    }
    if (str == 1) {
        return str
    }
    else{
        return reverseString(str.slice(1)) + str[0];
    }
    
}

console.log(reverseString("hola"));