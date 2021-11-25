var clasificados= [];

    for(i=0;i<5;i++){
        clasificado=prompt("Ingresar seleccion de futbol sudamericana que clasificara al mundial Qatar 2022");
        clasificados.push(clasificado);
    }
function ordenado() {
    clasificados.sort();

    for(i=0;i<clasificados.length;i++)
    {
        document.write("<h2>"+clasificados[i]+"</h2>");
    }
}
function no_ordenado() {
    for(j=0;j<clasificados.length;j++)
    {
        document.write("<h2>"+clasificados[j]+"</h2>");
    }
}