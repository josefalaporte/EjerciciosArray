// Rellena un array con los números del 1 al 10. Muéstralo por la consola

//const numeros = (1,2,3,4,5,6,7,8,9,10);
var numeros = [];
for (let i =1; i <= 10; i++) {
    numeros.push(i);
}
console.log(numeros);


//Let amigos = ["pedro","maria","joan","pili"];queremos que escriba "mis amigos son maria y joan.” con el siguiente array , haz que muestre la frase por consola
 
let amigos = ['Pedro','Maria','Joan','Pili'];
console.log(amigos.length);

let misAmigos = "Mis amigos son: " + amigos [1] + " y " + amigos [2] + ".";
console.log(misAmigos);


//Deberás crear un array para guardar los nombres de los meses del año , empezando por 0 para enero . Para comprobar el funcionamiento pide al usuario un número entre 0 y 11 y devuelve el nombre del mes del año . Se supone que el dato tecleado estará entre 0 y 11
//ejemplo : Si tecleo el número 4 me deberá decir que el mes es mayo.

let meses = ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

console.log(meses.length);

function obtenerNombreMes (numeroMes) {
    return meses [numeroMes];
}

let numeroMes = parseInt(prompt("Ingresa un numero entre 0 y 11: "));
let nombreMes = obtenerNombreMes(numeroMes);
console.log("El mes es: " + nombreMes + ".");


//Diseña una función llamada sumaLista() capaz de sumar todos los números que forman el array que se le pase como argumento.
//ejemplo : Si ejecuto sumaLista([2,4,5,1,2]) deberá devolver como resultado 14

function sumarLista (lista) {
    let suma = 0
    for (let i = 0; i < lista.length; i++)
    {
        suma += lista [i];
    }
    return suma;
}

const resultado =sumarLista ([2,4,5,1,2]);

console.log(resultado);











