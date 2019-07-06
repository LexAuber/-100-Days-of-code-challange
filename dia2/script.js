
// Ejercicios de JavaScript Basicos comentados:

// Web de los ejercicios: https://tutobasico.com/basicos-javascript/

    // Ejercicio 3 Concatenacion de cadenas de texto:

//1. Declaramos a var resultado como undefined.
//2. Abrimos un loop con do, declaramos una variable "cadena" y adquirira las cadenas de texto con un prompt.
//3. Hacemos la primera condicion con if, si resultado es igual a ''(true), resultado sera la suma de resultado y cadena.
//4. Si no, resultado sera, resultado con un - y la cadena.
//5.Y por ultimo un while con confirm para poder cancelar o continuar la cadena, seguido por un document.write para poder escribir lo que hemos recojido.
/*
var resultado = '';

do{
    var cadena = prompt('Introduce una cadena');
    if(resultado == ''){
        resultado = resultado + cadena;
    } else {
        resultado = resultado + '-' + cadena;
    }
} while(confirm('Seguimos?'));

document.write(resultado);
*/
    // Ejercicio 4 Concatenacion de cadenas de numeros:

    // Version 1 (Mostrar cadena y suma final)

var cadena = '';

do {
    var numeros = prompt('Introduce una cadena de numeros:');

    if (isNaN(numeros)){
        alert('Pon numeros, no letras ni palabras.');
    } else {
        if(eval(cadena) == '') {
            cadena = cadena + numeros;
            console.log(cadena);
            console.log(numeros);
        } else {
            cadena = cadena + ' + ' + numeros;
            console.log(cadena);
            console.log(numeros);
            var suma = 0;
            suma = eval(cadena);
        }
    }
} while (confirm('Quieres poner mas numeros?'));

document.write('Y la cadena de numeros es: ' + cadena + ' = ' + suma);

    // Version 2 (Solucion solo la suma)
/*
var cadena = 0;
var suma = '';

do {
    var numeros = prompt('Introduce una cadena de numeros');

    if (Number(numeros) == numeros){
        numeros = Number(numeros);
        cadena = cadena + numeros;
        suma = Number.toString(cadena) + numeros;
    } else {
        alert('Pon numeros, no letras ni palabras.');
    }
} while (confirm('Quieres poner mas numeros?'));

document.write('Y la cadena de numeros es: ' + suma + ' = ' + cadena);*/