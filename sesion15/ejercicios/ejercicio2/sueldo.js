/*
Se ingresan la cantidad de horas trabajadas, la categoría del empleado y la cantidad de años trabajando en la empresa.
Hallar el sueldo del empleado que va de acuerdo con su categoría:
A – S/ 60 la hora, B – S/ 50 la hora, C – S/ 40 la hora, cualquier otra categoría S/ 30 la hora.
La empresa otorgará las utilidades dependiendo de la cantidad de años del trabajador en la empresa: Para 20 años o más --- 5 veces el sueldo,
De 10 a 19 años en la empresa --- 4 veces el sueldo,
Para los demás --- será 3 veces el sueldo.
Hallar y mostrar todos los conceptos que recibirá el empleador en su boleta.
*/
function sueldo() {
    htrabajadas=parseInt(prompt("Ingrese las horas trabajadas"));
    categoria=prompt("Ingrese la categoría","A / B / C").toUpperCase();
    cantan=parseInt(prompt("Cantidad de años trabajando"));

    switch (categoria)
    {
        case "A": hora=60;break;
        case "B": hora=50;break;
        case "C": hora=40;break;
        default: hora=30;break;
    }
    sueld=htrabajadas*hora;
    if (cantan>=20) 
    {
        utilidad=5*sueld;
    }
    else 
    {
        if ((cantan>=10)) 
        {
            utilidad=4*sueld;
        } 
        else 
        {
            utilidad=3*sueld;
        }
    }
    document.write("<h2>Horas trabajadas: "+htrabajadas+"</h2>");
    document.write("<h2>Categoría: "+categoria+"</h2>");
    document.write("<h2>Años de servicio: "+cantan+"</h2><br>");
    document.write("<h2>SUELDO: "+sueld+"</h2>");
    document.write("<h2>UTILIDAD: "+utilidad+"</h2>");
}