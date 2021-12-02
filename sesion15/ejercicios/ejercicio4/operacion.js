/*
Ingrese dos números y el tipo de operación (S/R/M/D), realice la operación según se indica (Suma, Resta, Multiplicación, División) y de acuerdo al tipo ingresado mostrar la salida respectiva.
*/ 
function operacion() {
    num1=parseInt(prompt("Ingresar numero 1"));
    num2=parseInt(prompt("Ingresar numero 2"));
    tipo_operacion=prompt("Ingresar tipo de operación","S / R / M / D");

    switch (tipo_operacion.toUpperCase())
    {
        case "S": resultado=num1+num2; signo="+"; break;
        case "R": resultado=num1-num2; signo="-"; break;
        case "M": resultado=num1*num2; signo="x"; break;
        case "D": resultado=num1/num2; signo="/"; break;
    }
    document.write("<h1>"+num1+signo+num2+"</h1>")
    document.write("<h1>RESULTADO: "+resultado+"</h1>")
}