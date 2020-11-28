//Objects

const calcul = {
    x : 5,
    y : 3,
    addition : function() {
        return this.x+this.y;
    },
    multiplication: function(){
        return this.x*this.y;
    },
    affichageCalcul: function(signe){
        if(signe ==="*" || signe ==="x" || signe ==="X")
            console.log(`Le résultat du calcul 5 ${signe} 3 est = ${this.multiplication()}`);
        else
            console.log(`Le résultat du calcul 5 + 3 est = ${this.addition()}`);
    }        
    
}
calcul.affichageCalcul("x");
calcul.affichageCalcul("+");