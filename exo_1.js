function hasSumPairQuadratic(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === k) {
                return true; 
            }
        }
    }
    return false; 
}


const example1 = hasSumPairQuadratic([10, 15, 3, 7], 17);
console.log(example1); // Devrait afficher true

const example2 = hasSumPairQuadratic([1, 8, 10, 21], 19);
console.log(example2); // Devrait afficher false
