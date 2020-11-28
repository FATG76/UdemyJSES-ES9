//Funtion avec opérateur reste
//const nombre = []
function additionNombres(...nombres) {
    let somme = 0;
    for(let nombre of nombres){
        somme += nombre;
    }
    return somme;
    
}
function multiplicationNombres(...nombres) {
    let produit = 1;
    for(let nombre of nombres){
        produit *= nombre;
    }
    return produit;
    
}
console.log(`Le résultat pour l'addition est:  ${additionNombres(5, 10, 15, 20)}`);
console.log(`Le résultat pour la multiplication est:  ${multiplicationNombres(5, 10, 15, 20)}`);