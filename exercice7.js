//Programme qui compte 10 fois le nombre de pile et de face
let tableau = [];
function compterNombreDePileOuFace(){
    let i = 1;
    while(i<=10){
        let randomNumber = Math.floor(Math.random()*2);    
        tableau.push(randomNumber);            
        i++
    }
    console.log(tableau);

    let cptPile = 0;
    let cptFace = 0;
    for(let element of tableau){
        if(element ===1) cptPile++;
        else cptFace++;           
    }    
    console.log(`Le nombre de piles est de : ${cptPile},\
    et le nombre de faces est de : ${cptFace},\
    le nombre de faces représente : ${(cptFace/(cptPile+cptFace))*100}%`)
}
compterNombreDePileOuFace();








