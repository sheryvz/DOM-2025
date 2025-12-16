//Referencia del emoji del cursor

const cursor = document.querySelector(".cursor");

console.log(cursor);

//Detectamos el evento del moviemiento del mouse

document.addEventListener("mousemove" , (e) => {
    //console.log(e.clientX);
    //console.log(e.clientY);

    //Guardamos los datos en variables
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;


} )

//detectar el evento de presionar una tecla

document.addEventListener("keydown" , (e) => {
    //console.log(e.key);
    // usar switch para asignar el emoji al mouse

    switch (e.key) {
        case "1":
            cursor.textContent ="🤞";
            document.body.style.backgroundColor = "#1f9cf5";
            brake;
    
        case "2":
            cursor.textContent ="😜";
            document.body.style.backgroundColor = "#b10cf2";
            brake;

        case "3":
            cursor.textContent ="🤡";
            document.body.style.backgroundColor = "#f7ff1cff";
            brake;

        case "4":
            cursor.textContent ="💀";
            document.body.style.backgroundColor = "#0bff30";
            brake;
        default:
            cursor.textContent ="😺";
            document.body.style.backgroundColor = "#ff1ce5";
    }
    
    
})
