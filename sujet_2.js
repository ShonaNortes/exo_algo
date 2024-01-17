function countBuildingsWithSunsetView(buildingHeights) {
    let count = 0;
    let maxHeight = 0;

    // Parcourir la liste depuis l'est vers l'ouest
    for (let i = buildingHeights.length - 1; i >= 0; i--) {
        if (buildingHeights[i] > maxHeight) {
            // Si la hauteur de l'immeuble est plus grande que le plus haut vu jusqu'à présent
            maxHeight = buildingHeights[i];
            count++;
        }
    }

    return count;
}


const example1 = countBuildingsWithSunsetView([3, 7, 8, 3, 6, 1]);
console.log(example1); // Devrait afficher 3

const example2 = countBuildingsWithSunsetView([1, 4, 5, 8]);
console.log(example2); // Devrait afficher 1
