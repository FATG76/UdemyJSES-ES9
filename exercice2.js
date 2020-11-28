//factorielle d'un nombre

const nombreSaisi = $("#factorielle");

$("button").click(function(){
    const resultat = factorielleDunNombre(parseInt(nombreSaisi.val()));
    $("#resultat").html(`La factorielle de ${nombreSaisi.val()} est :  ${resultat}`);

});


function factorielleDunNombre(nombre){
    let factorielle = 1;
    for(let i = 1; i<=nombre; i++)
        factorielle *=i;
    return factorielle;
}