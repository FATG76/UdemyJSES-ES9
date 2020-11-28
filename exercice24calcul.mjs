// Modue import et export
const calcul = {
    moyenne : tab => {
        let moyenne = 0;
        for(let element of tab)
            moyenne +=element
    
        return moyenne/tab.length    
    },
      somme :  tab => {
        let somme = 0;
        for(let element of tab)
            somme +=element;
        
        return somme;    
    }
}
export default calcul; 

