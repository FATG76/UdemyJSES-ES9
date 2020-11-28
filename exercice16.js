//Utilisation de l'opérateur spread dans les objets
const classes = {

    guerrier:{ 
            classe: 'war', 
            force: 5, 
            agilite: 3, 
            intelligence: 2},
    archer : {
            classe: 'archer', 
            force: 3, 
            agilite: 5, 
            intelligence: 3},
    mage : {
            classe: 'war', 
            force: 2, 
            agilite: 3, 
            intelligence: 5}
    
}
console.log(classes);
let guerrier1 = {
        nom: 'Milo',
        age: 30,
        ...classes.guerrier
}
let archer1 = {
        nom: 'Tya',
        age: 22,
        ...classes.archer
}
affichierPerso(guerrier1, archer1)
function affichierPerso (...perso) {
    console.log(perso)
}