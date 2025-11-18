/* 

    Seleccionar el h1 a traves de su clase


*/

const titulo = document.querySelector(".titulo");

/* 

    Mosntrar el nodo seleccionado

*/

console.log(titulo);

/* 

    Objeto Syle

    Podemos acceder a este objeto usando la notacion de punto

        nodo.style

    Como resultado nos da un CSS Ste declaration. Es decir, nos va a dar una lista que representa todas las propiedades de estilo de un elemento.

    Las propiedades cambian del formato kebab-case a camelCase

    Unicamente muestra el valor de los estilos en linea declarados directamente en el elemento HTML.

*/

console.log(titulo.style);

/* 

    Para acceder a las propiedades de estilo, usamos la notacion de (.)

        nodo.style.nombrePropiedad

*/

console.log("El color del titulo es: " + titulo.style.color);

/* 

    Asignar un valor a la propiedad de estilo del nodo seleccionado

        node.style.color = valor

*/

titulo.style.color = "pink";
titulo.style.backgroundColor = "purple";
titulo.style.fontSize = "48px";

/* 


Método setProperty()

asignamos una propiedad de estilo a un elemento seleccionado.

Sintaxis: 

elemento.style.setProperty(nombrePropiedad, valor, important);

- Más flexible, por lo tanto, más usado.
-Las propiedades se escriben en kebap-kase
-El parámetro "importante" es opcional.


*/

titulo.style.setProperty("color", "darkblue");
titulo.style.setProperty("background-color", "green", "important");

/* 

Eliminar valores de propiedades

nodo.style.nombrePropiedad = "" // Asignamos una cadena vacía. 

En esta sintaxis, la propiedad de CSS va en formato camelCase.

*/

titulo.style.color= "";
titulo.style.backgroundColor = "";

/* 

Método removeProperty()

Este elimina la porpiedad de estilo.

Sitaxis: 
elemento.style.removeProperty(nombre-propiedad)

El nombre de la propiedad es en formato kebap-case

*/

titulo.style.removeProperty("color")
titulo.style.removeProperty("background-color")
titulo.style.removeProperty("font-size")

