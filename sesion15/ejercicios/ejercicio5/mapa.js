/*
Ingrese el nombre de un país latinoamericano y muestre el mapa y el presidente actual de dicho país ingresado, cualquier ingreso de un nombre no correcto mostrar el mensaje correspondiente.
*/
function mapa() {
    pais=prompt("Ingresar nombre de pais latinomericano");

    switch (pais.toUpperCase()) {
        case "PERU":
            document.getElementById('img-svg').getElementById('pe').style.fill="red";
            break;
        case "BRASIL":
            document.getElementById('img-svg').getElementById('br').style.fill="green";
            break;
        case "CHILE":
            document.getElementById('img-svg').getElementById('cl').style.fill="blue";
            break;
        default:
            document.write("Vuelva a intentar");
            break; 
    }
}