//Fonction asynchrone

async function faireCalcul(x, y) {
    console.log(`Essayer de faire le calcul ${x}*${y}`);
    console.log(await attendre(4));
    console.log(await attendre(2));
    console.log(await afficherResultat(x, y));
    
}
function attendre(timer) {
    return new Promise(resolve =>{
        setTimeout(()=> {
            resolve(`il vous reste ${timer} seconds` )
        }, 2000)
    })    
}
function afficherResultat(x, y){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(`Le résultat est: ${x*y}`);
        }, 2000);
    })
}
faireCalcul(10, 5);