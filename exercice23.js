//Fonction asynchrone pour un timer

compterTime(5);

async function compterTime(second) {
    for(i = second; i>0; i--){
        console.log(await timerT(i))
    } 
    console.log(`Go !!!!`)
}

function timerT(timer) {
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(timer);
        }, 1000);
    })    
}

