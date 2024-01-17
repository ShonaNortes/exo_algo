function hasSumPair(arr, k) {
    // Utiliser un ensemble pour stocker les nombres déjà rencontrés
    let numbersSet = new Set();

    for (let num of arr) {
        // Vérifier si la différence (k - num) est présente dans l'ensemble
        if (numbersSet.has(k - num)) {
            return true; 
        }

        // Ajouter le nombre à l'ensemble
        numbersSet.add(num);
    }

  
    return false;
}


const example1 = hasSumPair([10, 15, 3, 7], 17);
console.log(example1); // Devrait afficher true

const example2 = hasSumPair([1, 8, 10, 21], 19);
console.log(example2); // Devrait afficher false