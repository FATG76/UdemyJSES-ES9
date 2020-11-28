//Suppression d'un élément dans un tableau 

let tab = [
    {nom : 'Tya', age : 25},
    {nom : 'Toto', age : 22},
    {nom : 'Milo', age : 32},
    {nom : 'Mina', age : 32}
];

function trouverIndexDunElement(nom) {
    let index = tab.findIndex(perso =>{
        return perso.nom === nom;
    })
    return index;
}
tab.splice(trouverIndexDunElement("Milo"), 1)
console.log(tab);




