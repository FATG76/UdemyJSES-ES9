const inputNbrOne = document.querySelector("#nbr1");
const inputNbreTwo = document.querySelector("#nbr2");
const operation = document.querySelector("#signe");
const buttonValider = document.querySelector("#valider");
const divResultat = document.querySelector("#resultat");

buttonValider.addEventListener("click", function(){
    const nbr1 = parseInt(inputNbrOne.value);
    const nbr2 = parseInt(inputNbreTwo.value);
    switch(parseInt(operation.value)){
        case 1: divResultat.innerHTML = faireCalcul(addition, nbr1, nbr2);
        break;
        case 2: divResultat.innerHTML = faireCalcul(soustraction, nbr1, nbr2);
        break;
        case 3: divResultat.innerHTML= faireCalcul(multiplication, nbr1, nbr2);
        break;
        case 4: divResultat.innerHTML = faireCalcul(division, nbr1, nbr2);
        break;
        default: divResultat.innerHTML = formatage("Le calcul n'est pas pris en compte")

    }
    
});

const faireCalcul = (mafunctionDeCalcul, x,y) => {
    let txt = "<div style='color:green; border: 2px solid green'>"
    txt +=`Le résultatat est: ${mafunctionDeCalcul(x, y)}`
    txt +="</div>";
    return txt;
}

const formatage = message=>{
    let txt = "<div style='color:red; border: 2px solid red'>"
    txt +=`Le résultatat est: ${message}`
    txt +="</div>";
    return txt;
}

const addition = (x,y) => x+y;

const soustraction=(x,y) =>x-y;

const multiplication = (x,y) => x*y;
 
const division = (x, y) => x/y;   
 
