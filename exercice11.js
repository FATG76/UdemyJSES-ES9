//Fonction de transformation d'un tableau

const notes = [5, 10, 15, 20];

function transformationTableau(tab) {
    const tablauTransforme = tab.map(n =>{
        return n**2;
    });
    return tablauTransforme;    
}

console.log(notes);
console.log(transformationTableau(notes));   