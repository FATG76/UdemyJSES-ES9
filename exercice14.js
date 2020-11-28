const str = 'bonjour';

function estPolidrome(mot) {
    let arrayStr = mot.split('');
    let newArray = arrayStr.map(m =>{
        return m.split('').reverse().join('');
        
    })
    console.log(newArray);
    return newArray.reverse().join('') === mot;
    
 }

const resultat = estPolidrome(str);
console.log(str + " " + (resultat ? "est" : "n'est pas " )+ " un polidrome") ;

function estPolidromeB(string){
    let arrayStrB = string.split('');
    let newArrayB = arrayStrB.slice().reverse();
    for(let i = 0; i<newArrayB.length; i++){
        if(newArrayB[i] !== arrayStrB[i]) return false;
    }
    return true;
        
}

