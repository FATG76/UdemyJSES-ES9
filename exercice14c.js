const inputMot = document.querySelector("#mot");
const btn = document.querySelector(".btn");
const divResultat = document.querySelector("#resultat");

function estPalindome(mot){
    let motToArray = mot.split("");
    let motInverse = motToArray.slice().reverse();

    for(let i = 0 ; i < motToArray.length; i++){
        if(motToArray[i] != motInverse[i]) return false;
    }
    return true;
}

btn.addEventListener("click", afficherPalindrome);

function afficherPalindrome(){
    const mot = inputMot.value;
    divResultat.innerHTML = mot + " "+ (estPalindome(mot) ? "est" : "n'est pas" ) + " un palindrome";
}