function verificarfruta(){
    var imagen, text;
    var fruits=document.getElementById("myInput").value;

    switch(fruits)
    {
        case "mandarina":
            imagen="img/mandarina.jpg";
        break;
        case "mango":
            imagen="img/mango.jpg";
        break;
        case "manzana":
            imagen="img/manzana.jpg";
        break;
        case "naranja":
            imagen="img/naranja.jpg";
        break;
        case "pera":
            imagen="img/pera.jpg";
        break;
        case "piña":
            imagen="img/pina.jpg";
        break;
        case "platano":
            imagen="img/platano.jpg";
        break;
        case "uva":
            imagen="img/uva.jpg";
        break;
        default:
            text="No es su fruta favorita";
            imagen="";
    }
if(imagen=="")
{
    document.getElementById("fotocambia").src="img/todas.jpg";
    document.getElementById("titulo").innerHTML=text;
    document.getElementById("titulo").style.color="#ff0000";
}else{
    document.getElementById("fotocambia").src=imagen;
    document.getElementById("titulo").innerHTML="Si es su fruta favorita";
    document.getElementById("titulo").style.color="#1e90ff";
}
}