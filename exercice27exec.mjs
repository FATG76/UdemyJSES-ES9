import Livre from './exercice27livre.mjs'
import Auteur from './exercice27auteur.mjs'




const auteur1 = new Auteur("Milo", 31);
const auteur2 = new Auteur("Tya", 24);

console.log(auteur1.toString());
console.log(auteur2.toString());

const livre1 = new Livre("Algorythme selon H2PROG", 200, auteur1);

console.log(livre1.toString());