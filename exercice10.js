//Utilisation de la boucle for of et de la fonction entries() sur un tableau

const notes = [5, 10, 15, 20];

function affichageNotesPaires(mark) {
    
    for(let[indice, note] of mark.entries()){
        if(note % 2 === 0)
            console.log(`Note numéro ${indice} : ${note}`);
    }
}
affichageNotesPaires(notes);