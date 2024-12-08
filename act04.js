function reverseString(str) {
    if (str === "") {
        return "Candena vacia";
    }
    if (str === 1) {
        return str;
    }
    if (str > 1) {
        return (reverseString(str.slice(1) + str[0]));
    }
}

console.log(reverseString("hola"));

