//Classes et objets

class Livre {
    constructor(titre, nbPage, auteur){
        this.titre = titre;
        this.nbPage = nbPage;
        this.auteur = auteur;
    }
    toString = () =>`Titre : ${this.titre} - Nombre de page: ${this.nbPage} -  ${this.auteur} :`;


}

export default Livre;