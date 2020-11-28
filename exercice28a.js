//classes et objets

class Cercle{
    constructor(rayon){
        this.rayon = rayon;
    }
    perimetre= ()=> 2*Math.PI*this.rayon;

    aire = ()=> Math.PI*this.rayon**2;

    toString=() => `Cerlce de rayon ${this.rayon} - P : ${this.perimetre()}- A : ${this.aire()}`
    
}

for(let i = 2; i<=10; i++){
    const c = new Cercle(i);
    console.log(c.toString());
}

// const c1 = new Cercle(5);
// console.log(c1.perimetre());
// console.log(c1.aire());
// console.log(c1.toString());