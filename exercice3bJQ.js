// A revoir absolument

const rayonSaisi = $("#rayon");
const divResultat = $("#resultat");
const perimetreCheckbox = $("#perimetre");

$("#perimetre").onchange(function(){
    calcul();
    
})

function calcul(){
    let resultat = 0;
    if(perimetreCheckbox.checked){
        resultat = perimetre(rayonSaisi.val());
    } else {
        resultat = aire(rayonSaisi.val());
    }
    divResultat.innerHTML = resultat;
}

function perimetre(x){
    return "Périmètre : " + (Math.PI * x * 2);
}

function aire(x){
    return "Aire : " + (Math.PI * Math.pow(x,2));
}