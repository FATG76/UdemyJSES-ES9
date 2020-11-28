//Le pluriel des mots d'un tableau

const mots = ['clou', 'flou', 'bijou', 'genou', 'trou']
let motsPluriel =[];
for(let element of mots){
    if(element === 'clou' || element === 'flou' || element == 'trou'){
        let txt = '';
        txt += `${element}s`;
        motsPluriel.push(txt);
    }
    else{
        let txt = '';
        txt += `${element}x`;
        motsPluriel.push(txt);
    }
}
console.log(motsPluriel);

const exceptions = ['bijou', 'caillou', 'chou', 'genou', 'hibou', 'joujou', 'pou'];
motsPluriel = mots.map(m =>{
    return exceptions.includes(m)? m+"x" : m+"s";
})

console.log("----------------");
console.log(motsPluriel);