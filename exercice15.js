//Parametres par défauts

function afficherTableMultiplication(nombre, debut = 1, fin = 10) {
    if(debut>fin){
        let temp = debut;
        debut = fin;
        fin = temp;
    }
    let multip = 1;
    for(let i = debut; i<fin; i++){
        multip = i*nombre;
        console.log(`${i}*${nombre} = ${multip}`);
    }        
        
}
afficherTableMultiplication(5);
console.log('******************');
afficherTableMultiplication(5, 7);
console.log('******************');
afficherTableMultiplication(5, 9, 15);
