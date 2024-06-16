/*Función entregada:
function pintar() {
  ele.style.backgroundColor = "yellow";
}
const ele = document.getElementById("ele1");
ele.addEventListener("click", pintar);¨*/

//Función Modificada:

function pintar(ele1, colorInicial) {
    if (ele1.style.backgroundColor === colorInicial) {
        ele1.style.backgroundColor = "yellow";
    } else {
        ele1.style.backgroundColor = colorInicial;
    }
}

const ele1 = document.getElementById("ele1");
const colorInicial = "green"; 
ele1.style.backgroundColor = colorInicial; 
ele1.addEventListener("click", function() {
    pintar(ele1, colorInicial);
});

