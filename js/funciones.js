function sumaIterativa(num){
    let suma=0;
    for(let i=0;i<num;i++){
        suma=suma+i;
    }
    return suma;
}

document.write(sumaIterativa(5));