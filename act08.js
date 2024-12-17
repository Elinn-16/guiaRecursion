function findMax(arr) {
    if (arr.length === 1) {
        return arr[0]
    }
    if (arr.length > 1) {
        const num = findMax(arr.slice(1))
        return arr[0] > num ? arr[0] : num 
    }
}

console.log(findMax([1,2,3,4]))