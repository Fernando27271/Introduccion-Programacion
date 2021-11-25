window.onload=init;
function init() {
    document.body.style.backgroundColor="#fc0";
    document.getElementById("visor").style.borderColor="#f00";
    document.getElementById("visor").onclick=cambiar;
    document.getElementById("botonCasa").onclick=verCasa;
    document.getElementById("botonIsla").onclick=verIsla;
    
}
function cambiar() {
    document.body.style.backgroundColor="#999";
    document.title="¡Nuevamente Bienvenido!";
    document.getElementById("visor").style.borderWidth="40px";
}
function verCasa() {
    document.getElementById("muestra").src="casa.jpg";
}
function verIsla() {
    document.getElementById("muestra").src="isla.jpg";
}