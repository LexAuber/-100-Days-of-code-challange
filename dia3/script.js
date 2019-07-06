
// Ejercicios de JavaScript Basicos comentados:

// Web de los ejercicios: https://tutobasico.com/basicos-javascript/

// Realizar una pagina con un script que calcule el valor de la letra del DNI.

// Algoritmo para calcular la letra del DNI:

/*

Numeros entre 0 99999999, calcular division entera entre el numero y el numero 23, segun el resultado, de 0 a 22 le correspondera una letra en un array. Si lo introducido no es un numero y volver a preguntar. Debera repetirse el proceso hasta que el usuario cancele.
*/

var numUsuario = prompt('Introduce un numero de 8 digitos: ');

var letraUsuario = '';

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

if(isNaN(numUsuario)){
    alert('Escribe numeros');
} else {
    var definitivo = numUsuario%23;
    var letraUsuario = letras [definitivo];
    
    document.write('Tu nuevo DNI es: ' + numUsuario + letraUsuario);
}

