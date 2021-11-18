function cifra() {
    num=prompt("Escribe un número");
    num=Number(num);
    if(num>=10)
    {
        alert("Tú numero tiene más de una cifra");
    }
    else
    {
        alert("Tú numero solo tiene una cifra");
    }
}