function countBuildingsWithSunsetViewQuadratic(buildingHeights) {
    let count = 0;

    for (let i = 0; i < buildingHeights.length; i++) {
        let hasSunsetView = true;

        for (let j = i + 1; j < buildingHeights.length; j++) {
            if (buildingHeights[j] >= buildingHeights[i]) {
                hasSunsetView = false;
                break; // Aucune vue sur le coucher de soleil pour ce bâtiment
            }
        }

        if (hasSunsetView) {
            count++;
        }
    }

    return count;
}


const example1 = countBuildingsWithSunsetViewQuadratic([3, 7, 8, 3, 6, 1]);
console.log(example1); // Devrait afficher 3

const example2 = countBuildingsWithSunsetViewQuadratic([1, 4, 5, 8]);
console.log(example2); // Devrait afficher 1
