function hasSumPairLinear(arr, k) {
    const numbersSet = new Set();

    for (let num of arr) {
        const complement = k - num;

        if (numbersSet.has(complement)) {
            return true; 
        }

        numbersSet.add(num);
    }

    return false; 
}


const example1 = hasSumPairLinear([10, 15, 3, 7], 17);
console.log(example1); // Devrait afficher true

const example2 = hasSumPairLinear([1, 8, 10, 21], 19);
console.log(example2); // Devrait afficher false
