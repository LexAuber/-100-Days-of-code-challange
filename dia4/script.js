/*
// Ejercicios de JavaScript Basicos comentados:

// Web de los ejercicios: https://tutobasico.com/basicos-javascript/

// Realiza un script que escriba una piramide del 1 al 30, repitiendose el numero al lado del otro, segun el que sea:

1, 22, 333,444..
*/

// de - a +
var numeros,repeticion

for(numeros=1;numeros<=30;numeros++){
    for(repeticion=0;repeticion<numeros;repeticion++){
        document.write(numeros);
    }
    document.write('<br/>');
}

// de + a - con 
