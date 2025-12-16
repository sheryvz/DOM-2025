/* 

Un evento es una acción o suceso
que ocurre en el navegador o en un 
elemento del DOM. Puede ser iniciado 
por el ususario o por el sistema. Los eventos pueden ser manejados mediante JS.


+ Manejar Eventos con JS

1. Target (Objetivo o Blanco)

Es el elemento del DOM en el que ha ocurrido el evento.
Este se encuentra dentro del objeto evento (event) y se accede 
mediante la propiedad event.target

2. Event Listener (Escuchador del evento)

Es el "oido" que esta atento a que ocurra un evento

3. Trigger (Disparador o Desencadenante)
 
  Es el desencadenante que provoca que un evento ocurra
  Es la acción que realiza el usuario o el sistema para activar el evento.

  + hacer click
  + mover ratón
  + tipear teclas

  4. Event Hanler (Manejador de Evento)
  
  Es una función que se va a ejecutar cada vez que ocurre el evento.Con JS le decimos que va a ejecutar 
  el manejador.

  + mostrar un mensaje
  + cambiar un color
  + agregar un elemento
  + lanzar una alerta

  sintaxis: 

   target.eventListener( trigger, eventHandler);

   target -> elemento donde ocurre el evento
   listener -> escucha y detecta el evento
   trigger -> acción que ocurre en el evento
   handler -> la función que se ejecuta al ocurrur el evento

*/

//seleccionamos un elemento


const button = document.getElementById("button");

// Manejar su evento

button.addEventListener("click", mostrarMensaje );

//definir mensaje


function mostrarMensaje() {
    //código que se ejecuta 
    alert("Ya vamonos por favor")
}