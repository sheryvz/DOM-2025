/* 

Objeto event

El objeto evento (e) es la representacion de un suceso que ocurre en el navegador, como un click, pulsar una tecla o el movimiento del mouse. Nos proporcionan información sobre las propiedades y métodos para manipularlo.

PAra acceder al objeto event (e) s epasa como argumento de la función manejadora (handler)

sintaxis:
function eventHandler() {
    //código que se ejecuta
    console.log(e)
}

Algunas propiedades

type => devolver el tipo de evento
target => devolver el elemento donde ocurre el evento
timeStamp => devuelve la marca de tiempo en milisegundos desde la carga de la página

code => devuelve el coódigo de la tecla presionada
key => devuelve el valor de la tecla presionada

clientX => devuelve la posición horizontal del puntero del mouseen relación a la ventana del navegador.
clientY => devuelve la posición vertical del puntero del mouse en relación a la ventana del navegador

*/

//referencia

const apachurra = document.getElementById("apachurra")

// evento

apachurra.addEventListener("click" , mostrarObjetoEvento)

//función declarada

function mostrarObjetoEvento(event) {
    //código a ejecutar
    console.log(event)
    //para acceder a las propiedades con .
    console.log(event.type)
    console.log(event.target)
    console.log(event.timeStamp)
    console.log(event.target.innerText)
}

// evento de teclas

document.addEventListener("keydown" , function(e) {
    // codigo que se ejecuta cuando el usuario presione la tecla
    //console.log(e)
    //console.log(e.type)
    //console.log(e.code)
    console.log(e.key)
})

//evento del mouse

document.addEventListener("mousemove" , (e) => {
    // codigo que se ejecuta
    //console.log(e)
    //console.log(e.type)
    //console.log(e.clientX)
    //console.log(e.clientY)
    console.log(Las cordenadas de mi mouse en X son: ${e.clientX} y de Y son: ${e.clientY})
})