/* 

obtener un elemento de referencia.
Este será el nodo de HTML donde vamos a crear el nuevo elemrnto

*/

const peliculas = document.getElementById("peliculas");

/* 

Para crear un nuevo elemento usamos createElement()

sintaxis:

 document.createElemetn("tipoElemento");

*/

const nuevaPeli = document.createElement("li");

/* 

Para agregar el elemento al DOM, tomamos el elemento de referencia y usamos el método append()

sintaxis: 

  elementoReferencia.append(nuevoElemento);

*/

peliculas.append(nuevaPeli);

/* 

Para agregarle contenido al nuevo elemento podemos usar innerText

*/

nuevaPeli.innerText = "Terminator";

console.log(peliculas)

/* reto */

nuevaPeli.classList.add("pelicula", "fondo-dos");// agregamos más clases separadas por comas

