/* 
seleccionar al elemento seccion por su id 

*/

const pokemones = document.getElementById("pokemones");

/* mostratrlo por consola */

console.log(pokemones);

/* 

innerText

DEVULEVE UN "STRING"  DEL CONTENIDO VISIBLE DENTRO DE UN ELEMENTO 

elemento.innerText

- Excluye los elementos ocultos 
-Excluye los espacios en el documento 
-Excluye las etiquetas del html

*/

console.log(pokemones.innerText);

/* 

textContent

Devuelve un "string" del contenido visible dentro de un elemento 

sintaxis:
elemento.textContent

-incluye los espacios 
-incluye elementos ocultos
-Excluye las etiquetas html


*/

console.log(pokemones.textContent);

/* 


innerHTML

Devuelve un "string" con la estructura interna del elemento seleccionado 

sintaxis: 
elemento.innerHTML

-incluye los espacios 
-incluye elementos ocultos 
-incluye las etiquetas html
*/

console.log(pokemones.innerHTML);
                       

/* 
Modificar el contenido innerText

Asignar el valor al elemento seleccionado.

elemento.innerText = "contenido en string";

*/

//pokemones.innerText = "Snorlax yo te elijo ";

const subtitulo = document.querySelector("h2");
const enlace = document.querySelector("a");

subtitulo.innerText = "mis pokeamigos favoritos";
enlace.innerText = "pikapika";



/* 
 Modificar el contenido con textContent

 Asignamos un valor al elemento seleccionado

   elemento.textContent =  "string";

*/

subtitulo.textContent = "Mis cuates";
enlace.textContent = "Bola de fuego";

/* 

Modificar el contenido con HTML

Asignamos el valor al elemento seleccionado incluyendo etiquetas html.


  elemento.innerHTML = "<etiqueta>...</etiqueta>";


*/

subtitulo.innerHTML = "Amigos <span class='resalte'>pokesitos!</span>";
enlace.innerHTML = "Aún más <span class='resalte'>pokemonstros</span>";


/* 

getAttribute()

Devuelve el valor del atributo del elemento.

elemento.getAttribute(atributo);

*/

console.log( enlace.getAttribute("href") );


/* 

removeAttribute()

Eliminamos el valor del atributo de un elemento.

  elemento.removeAttribute(atributo);

  -El atributo pasa como string

*/


enlace.removeAttribute("href");
console.log(enlace.getAttribute("href"));// Null


/* 

setAttribute()

Asigna unatributo y un valor a un elemento.

  elemento.setAttribute(atributo, valor);

  - el atributo y valor pasan como string
  - sobreescribir un atributo ya declarado
  - crear un nuevo atributo y su valor

*/

enlace.setAttribute("href", "https://www.instagram.com");
enlace.setAttribute("target", "_blank");