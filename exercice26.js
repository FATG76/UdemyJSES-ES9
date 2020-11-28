//Notions des classes et héritage en JS

class Voiture {
    constructor(marque, modele, nombrePorte){
        this.marque = marque;
        this.modele = modele;
        this.nbPortes = nombrePorte;
    }
}

class Voiture5portes extends Voiture{
    constructor(marque, modele){
        super(marque, modele, 5);
        this.type = "familial";
    }
    
}

class Voiture3portes extends Voiture{
    constructor(marque, modele){
        super(marque, modele, 3);
        this.type = "célibataire";
    }
    
}
class Voiture5portesYotota extends Voiture5portes{
    constructor(modele){
        super("yotota", modele);
       
    }
    
}
class Voiture5portesTroen extends Voiture5portes{
    constructor(modele){
        super("Troen", modele);
    }
    
}
class Voiture5portesYototaRyas extends Voiture5portesYotota{
    constructor(){
        super("Ryas");
               
    }
    
}

let voiture5portesYototaRyas = new Voiture5portesYototaRyas();
console.log(voiture5portesYototaRyas);

let voiture5portesTroen = new Voiture5portesTroen("5C");
console.log(voiture5portesTroen);

let voiture3portes = new Voiture3portes("Troen","4C");
console.log(voiture3portes);
