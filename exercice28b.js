

//Recupération des id des différents élément du HTML
const inputNbr = document.querySelector("#nbr");
const choixAffiche = document.querySelector("#choix");
const buttonValider = document.querySelector("#btn");
const divResultat = document.querySelector("#resultat");

class Cercle{    
    constructor(rayon){
        this.rayon = rayon;
    }
    perimetre= ()=> 2*Math.PI*this.rayon;

    aire = ()=> Math.PI*this.rayon**2;

    toString=() => `Cerlce de rayon ${this.rayon} - P : ${this.perimetre()}- A : ${this.aire()}`
}
// Création d'un objet cercle c1

const c1 = new Cercle(parseInt(inputNbr.value));

function choixCalcul(choix){
    let resultat = 0;
    switch(choix){
        case "tt":
            resultat = c1.toString();
        break;
        case "p":
            resultat = c1.perimetre();
        break;
        case "a":
            resultat = c1.aire();
        break;
        default:
            resultat = -1;

    }
    return resultat;
}

buttonValider.addEventListener("click", ()=>{
    c1.rayon=parseInt(inputNbr.value);
    divResultat.innerHTML=choixCalcul(choixAffiche.value);

})