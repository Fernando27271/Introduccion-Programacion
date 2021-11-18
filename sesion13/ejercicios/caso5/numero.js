function numero() {
    num=parseInt(prompt("Ingresar un número del 10 al 20"));
    if (num<10 || num>20) 
    {
        alert("Este número no es valido");
    }
    else 
    {
        alert("El número es valido");
    }
}