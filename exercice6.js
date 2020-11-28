// moyenne des éléments d'un tableau

function moyenneValeurTableau(tab) {
    let somme = 0;
    for(let element of tab)
        somme += element;
    return somme/tab.length;    
}

const moyenne = moyenneValeurTableau([5, 10, 15, 20]);
console.log(`La moyenne est de : ${moyenne}`);

function calculMoyenne(tab1) {
    let somme1 = 0;
    for(let indice in tab1)
        somme1 +=tab1[indice];
    return somme1/tab1.length;
}
const moyenne1 = calculMoyenne([5,10, 15, 20]);
console.log(`La moyenne est de : ${moyenne1}`)