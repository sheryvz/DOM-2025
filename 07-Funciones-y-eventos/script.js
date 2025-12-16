/* 

Funciones eventos

la función en un evento es el Handler. es lo que se ejecuta cuando ocurre un evento.

1. Función declarad
    se escribe por fuera de evento y pasa como argumento del Listener

    sintaxis:
    target.eventListener(trigger, eventHandler);

    function eventHandler() {
        //código que se ejecuta
    }

*/

// Referencias

const declarada = document.getElementById("declarada")

// evento con función declarada

declarada.addEventListener("click" , funcionDeclarada);

function funcionDeclarada() {
    console.log("hiciste click en el botón con función declarada!")
};

/* 

2. Evento con función anónima
    la función se escribe dentro del evento y no tiene un nombre asignado.

    sintaxis:
    target.addEventListener(trigger, function(){//código a ejecutar})

*/

//Referencia

const anonima = document.getElementById("anonima");

//Evento con función anónima

anonima.addEventListener("click" , function() {
    console.log("hiciste click en el botón con función anónima!")
});

/* 

3. Evento con funcion flecha
    se escribe tambien dentro de evento, no tiene nombre y es mas concisa.

    sintaxis:
     target.addEventListener(trigger, () => {})

    *si el codigo que se ejecuta tiene mas de 1 linea, se debe escribir entre las llaves
    *si el codigo que se ejecuta tiene 1 sola linea, se puede omitir las llaves

*/

//Referencia

const flecha = document.getElementById("flecha");

//Evento con función Flecha

flecha.addEventListener("click" , () => {
    console.log("hiciste click en el botón con función flecha!")
});