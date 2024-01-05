let nombres=["Pedro", "María", "Jorge"];

//Eliminar último elemento con Pop
let resultado = nombres.pop();
document.write(resultado);


//Eliminar el primer elemento
resultado=nombres.shift();
document.write(resultado+"<br>");

//Agregar un elemento al array
nombres.push("Fernanda","Enrique");

document.write(nombres);

//Reverse
document.write(nombres.reverse());

//unshift agrega elementos desde el principio
nombres.unshift("Adriana","María","Rocío");

document.write(`<br> ${nombres}`);

//Ordenar arreglo
let numero=[2,5,1,9,5,7];
numero.sort();

document.write(numero);

//Eliminar elementos desde una posición específica
numero.slice(3,2);
