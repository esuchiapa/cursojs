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
document.write("<br>");
//Ordenar arreglo
let numero=[2,5,1,9,5,7];
numero.sort();

document.write(numero);
document.write("<br>");
//Eliminar elementos desde una posición específica
numero.splice(3,2);
document.write(numero);

document.write("<br>");

//Métodos accesores
//Join covierte el arreglo en una cadena de texto
let frutas=["platano", "manzana", "mandarina","fresa"];
document.write(frutas);
document.write("<br>");

let frutasJoin=frutas.join("-");

document.write(frutasJoin);

//Slice devuelve una parte del array dentro de un nuevo arreglo empezando por inicio hasta fin
frutasJoin=frutas.slice(1,3);
document.write("<br>");

document.write(frutasJoin);
//Include sirve para ver si un elemento está en el arreglo
document.write("<br>");
document.write(frutas.includes("manzana"));
document.write(frutas.indexOf("fresa"));


//De repetición de arreglos

//Filter es un bucle
document.write("<br>");
frutas.filter(fruta=> document.write ("Fruta: "+fruta+"<br>"));


//For each
document.write("<br>");
frutas.forEach(fruta=> document.write ("Fruta: "+fruta+"<br>"));

//Filter crea un nuevo array con las propiedades especificadas

resultado=frutas.filter(fruta=>frutas.length>2);
document.write(resultado);