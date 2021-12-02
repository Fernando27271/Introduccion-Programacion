/*
Se ingresan las 4 notas de un alumno. Hallar y mostrar su promedio. Luego mediante un mensaje mostrar: 
Si el promedio es 19 o 20    --- “Excelente”
Si el promedio es 16 o 17 o 18 --- “Bueno”
Si el promedio es 13 o 14 o 15 --- “Regular”
Cualquier otro promedio    --- “Malo”
*/ 
function promedio() {
    var nota1,nota2,nota3,nota4,promedio;
    nota1=parseInt(prompt("Ingresar nota 1"));
    nota2=parseInt(prompt("Ingresar nota 2"));
    nota3=parseInt(prompt("Ingresar nota 3"));
    nota4=parseInt(prompt("Ingresar nota 4"));
    promedio=Math.floor((nota1+nota2+nota3+nota4)/4);
    if(promedio==19 || promedio==20)
    {
        document.write("<h1>Su Promedio es "+promedio+"<br><strong>Excelente</strong></h1>");
    }
    else
    {
        if (promedio<=18 && promedio>=16) 
        {
            document.write("<h1>Su Promedio es "+promedio+"<br><strong>Bueno</strong></h1>");
        } 
        else 
        {
            if (promedio<=15 && promedio>=13) 
            {
                document.write("<h1>Su Promedio es "+promedio+"<br><strong>Regular</strong></h1>");
            } 
            else 
            {
                document.write("<h1>Su Promedio es "+promedio+"<br><strong>Malo</strong></h1>");
            }
        }
    }
}