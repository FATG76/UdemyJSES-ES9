//Destructuring sur le objets
const villes = {
    paris : {nom: "Paris", lat : 48.8534, long : 2.3488},
    toulouse : {nom: "Toulouse",lat : 46.6043, long : 1.4437},
    lyon : {nom: "Lyon",lat : 45.75, long : 4.85}
};

let{paris, toulouse, lyon} = villes;
function affichageCoordonnees(ville){
    let{nom, lat, long} = ville
    let affichage = `
    ------- ${nom} -------
    Latitude : ${lat}
    Longitude : ${long}`;
    console.log(affichage);
}
 affichageCoordonnees(paris);
 affichageCoordonnees(toulouse);
 affichageCoordonnees(lyon);