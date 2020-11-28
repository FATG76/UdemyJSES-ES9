const inputNb1 = document.querySelector("#nb1");
const inputNb2 = document.querySelector("#nb2");
const optionSigne = document.querySelector("#signe");
const buttonValider = document.querySelector("#valider");
const divResultat = document.querySelector("#resultat");



let calcul = {
    x : 1,
    y : 1,
    addition : function() {
        return this.x + this.y;
    },
    multiplication: function(){
        return this.x * this.y;
    },
    affichageCalcul: function(signe){
        //let resultat = 0;
        switch(signe){
            case "*": 
               divResultat.innerHTML=`Le résultat du calcul de ${this.x}${signe}${this.y} est = ${this.multiplication()}`;
            break;
            case "+":
                divResultat.innerHTML=`Le résultat du calcul de ${this.x}${signe}${this.y} est = ${this.addition()}`;
            break;
            default:
                resultat = -1;
        }
       //return `Le résultat du calcul de ${this.x}${signe}${this.y} est = ${resultat}`;
    }        
    
}

buttonValider.addEventListener("click", ()=> {
    calcul.x = parseInt(inputNb1.value);
    calcul.y = parseInt(inputNb2.value)
    calcul.affichageCalcul(optionSigne.value);
   
});