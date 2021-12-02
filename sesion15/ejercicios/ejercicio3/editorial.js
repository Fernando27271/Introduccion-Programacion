/*
Se ingresan el título del libro, autor, editorial y el precio del libro. La empresa editora procederá al reajuste
(Aumento) de los precios de los libros.

Para los libros de la editorial ARPA cuyos autores sean: Baca o Bances 🡪 se le aplicaran un reajuste del 30% Ciro o Cuba    🡪 se le aplicaran un reajuste del 20%
Para cualquier otro autor de esta editorial el reajuste será del 10% Para los libros de la editorial URSA suyos autores sean:
Arroyo o Abanto   🡪se le aplicaran un reajuste del 25%
Salazar    🡪el reajuste será del 15%
Cualquier otro editorial, no importando el autor, el reajuste será del 18%. Además todos los libros pagarán un impuesto del 1.5%.
Mostrar el reajuste, el impuesto y el precio final del libro.

*/
function editorial() {
    titulo = prompt("Titulo del libro:");
    autor = prompt("Autor:");
    editor = prompt("Editorial:");
    precio = parseInt(prompt("Precio del libro:"));

    switch (editor.toUpperCase())
    {
        case "ARPA":
            switch (autor.toUpperCase())
            {
                case "BACA": 
                case "BANCES":
                    aumento=30/100; break;
                case "CIRO": 
                case "CUBA":
                    aumento=20/100; break;
                default:
                    aumento=10/100; break;
            }
        ; break;
        case "URSA":
            switch (autor.toUpperCase())
            {
                case "ARROYO": 
                case "ABANTO":
                    aumento=25/100; break;
                case "SALAZAR": 
                    aumento=15/100; break;
            }
        ; break;
        default:
            aumento=18/100; break;
    }
    reajuste=aumento*precio;
    igv=1.5/100;
    subtotal=precio+reajuste;
    impuesto=(precio+reajuste)*igv;
    total=(precio+reajuste)+impuesto;

    document.write("<h2>Titulo: "+titulo+"</h2>");
    document.write("<h2>Autor: "+autor+"</h2>");
    document.write("<h2>Editorial: "+editor+"</h2>");
    document.write("<h2>Precio: "+precio+"</h2><br>");

    document.write("<h2>REAJUSTE: +"+reajuste+"</h2>");
    document.write("<h2>SUBTOTAL: "+subtotal+"</h2>");
    document.write("<h2>IMPUESTO: "+impuesto+"</h2>");
    document.write("<h2>PRECIO FINAL DEL LIBRO: "+total+"</h2>");
}