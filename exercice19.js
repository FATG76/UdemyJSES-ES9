//Utilisation des fonctions fléchées
const notes1 = [5, 10, 15, 20];
const notes2 = [2, 4, 6];


const calculMoyenne = tab =>{
    let moyenne = 0;
    for (let valeur of tab){
        moyenne += valeur/tab.length;
    }
    return moyenne;
}

const ajout = tab =>tab.map(n=> n+1);


const additioner =(tab1, tab2)=>{
    let taille = tab1.length;
    if(tab1.length<tab2.length) taile = tab2.length;
    let newTab = [];
    for(let i = 0; i<taille; i++){
        let valeur = (tab1[i])? tab1[i]: 0;
        valeur +=(tab2[i])? tab2[i]: 0;
        newTab.push(valeur);
    }
    return newTab;
}
console.log(`La moyenne des notes du tableau 1 est: ${calculMoyenne(notes1)}`);
console.log(`La moyenne des notes du tableau 2 est: ${calculMoyenne(notes2)}`);
console.log(`La somme des éléments de deux tableau donne le tableau 3 : ${additioner(notes1, notes2)}`)
console.log(`Le tableau 1 majoré donne: ${ajout(notes1)}`)
