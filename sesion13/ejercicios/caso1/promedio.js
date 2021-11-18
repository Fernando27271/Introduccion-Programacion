function promedio() {
    var ep,ef,pt,pp,promedio;
    ep=parseInt(prompt("Ingrese examen parcial"));
    ef=parseInt(prompt("Ingrese examen final"));
    pt=parseInt(prompt("Ingrese Promedio de trabajos"));
    pp=parseInt(prompt("Ingrese Promedio de practicas"));
    promedio=Math.floor((ep+ef+pt+pp)/4);
    if(promedio>=13)
    {
        document.write("Su Promedio es "+promedio+" Esta aprobado");
    }
    else
    {
        document.write("Su Promedio es "+promedio+" Esta desaprobado");
    }
}