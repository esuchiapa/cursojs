function perrear(o1,t1,o2,t2){
    
    let mensaje;
    if(o1>o2 && t1>t2){
        mensaje="Elige hueso 1";
    }
    else if(o2>o1 && t2>t1){
        mensaje ="Elige hueso 2";
    }
    else{
        mensaje="Perrito confundido";
    }

    return mensaje;
}

let o1=parseInt(prompt("Calificación de olor del hueso 1"));
let t1=parseInt(prompt("Calificación de tamaño del hueso 1"));
let o2=parseInt(prompt("Calificación de olor del hueso 2"));
let t2=parseInt(prompt("Calificación de tamaño del hueso 2"));

document.write(perrear(o1,t1,o2,t2))