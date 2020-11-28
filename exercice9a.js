//Destructuring sur un tableau
const villes = [
    ["Paris", 48.8534, 2.3488],
    ["Toulouse", 46.6043, 1.44371],
    ["Lyon", 45.75, 4.85],
];

let[, , Lyon] = villes;

console.log(Lyon);

function affichageCoordonnees(ville) {
    let[nom, latitude, longitude] = ville;
    let affichage = `
    --------${nom}---------
    Latitude : ${latitude}
    Longitude: ${longitude} `
    console.log(affichage)
    
}

affichageCoordonnees(Lyon);