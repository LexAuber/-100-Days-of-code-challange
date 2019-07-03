
// Ejercicios de JavaScript Basicos comentados:

// Web de los ejercicios: https://tutobasico.com/basicos-javascript/

    // Ejercicio 1: Comprobador de Edad para poder conducir: 

// Preguntamos la edad mediante una variable "edad" y parseInt para transformar la string en numeros, y un prompt para recojer datos.

var edad = parseInt(prompt('Que edad tienes?'));

// Añadimos la primera condicion que dice lo siguiente: Si, Edad es un NaN (Not a Number), devuelve true, y el primer alert saltara, Introduce numeros!
// En caso contrario, si devuelve false, pasara a las siguientes condiciones

if(isNaN(edad)){
    alert('Introduce numeros!')

} else {

    // Si Edad es mayor o igual a 18, devuelve true, y saltara la primera alerta, si devuelve false, saltara la segunda alerta.

    if(edad>=18){
        alert('Ya puedes empezar a conducir :)');
    } else {
        alert('Lo siento, tendras que esperar :(');
    }
}


    // Ejercicio 2: Pide una nota y muestra la calificacion segun la nota:

/***--- Aritmetica del ejercicio ---***/

// 1. Preguntamos la nota mediante una variable "nota" y parseInt para transformar la string en numeros, y un prompt para recojer datos.

// 2. Añadimos la primera condicion que dice lo siguiente: Si, Edad es un NaN (Not a Number), devuelve true, y el primer alert saltara, Introduce numeros! En caso contrario, si devuelve false, pasara a las siguientes condiciones.

    // 3.1 Una vez ha pasado el filtro, pasamos a las siguientes condiciones: Si la nota es MENOR a 5 o estrictamente igual a 5:

        // 3.1.1 Si la nota es MENOR o IGUAl a 3, salta el primer alert(muy deficiente).
        // 3.1.2 Si no, si la nota es MAYOR que 3 y MENOR que 5, salta el segundo alert(insuficiente).
        // 3.1.3 Si no, salta el tecer alert(suficiente).
        
    //3.2 Si no cumple con las primeras condiciones, pasa a estas:

        //3.2.1 Si la nota es MAYOR o IGUAL a 6 y es MENOR que 7, salta el cuarto alert(bien).
        //3.2.2 Si no, si la nota es MAYOR o IGUAl que 7 y es MENOR que 9, salta el quinto alert(notable).
        //3.2.3 Si no, salta el sexto alert(sobresaliente).

/*----- Practica del ejercicio -----*/

var nota = parseInt(prompt('Que nota has obtenido en el examen?'));

if(isNaN(nota)){
    alert('Tu nota en numeros!');
} else {
    if(nota < 5 || nota === 5){
        if(nota <= 3){
            alert('Has sacado un ' + nota + ', es muy deficiente! Tienes que estudiar mucho en verano.');
        } else if(nota > 3 && nota < 5){
            alert('Has sacado un ' + nota + ', es un insuficiente, estudia mas la proxima vez.' );
        } else {
            alert('Has sacad un ' + nota + ', es un suficiente, aun asi se puede mejorar.');
        }
    } else {
        if(nota >= 6 && nota < 7){
            alert('Has sacado un ' + nota + ', es un bien, puedes subir de nota.');
        } else if(nota >= 7 && nota < 9) {
            alert('Has sacado un ' + nota + ', es un notable, muy bien!');
        } else {
            alert('Has sacado un ' + nota + ', un sobresaliente, felicidades!');
        } 
    }
}


