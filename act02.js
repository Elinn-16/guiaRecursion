function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    if (arr.length === 1) {
        return arr[0];
    }
    if (arr.length > 1){
        return arr.pop() + sumArray(arr)
    }
}

console.log(sumArray([0, 1, 2, 3]));