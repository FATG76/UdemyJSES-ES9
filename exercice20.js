//Fonction de rappel
const faireCalcul = (x,y, mafunctionDeCalcul) => {
    console.log("****************");
    console.log(`Le résultatat est: ${mafunctionDeCalcul(x, y)}`);
    console.log("****************");
}

const addition = (x,y) => x+y;

const soustraction=(x,y) =>x-y;

const multiplication = (x,y) => x*y;
 
const division = (x, y) => x/y;   
 
faireCalcul(5,3, addition);
faireCalcul(12,10, soustraction);
faireCalcul(10,11, multiplication);
faireCalcul(5,3, division);
 
 