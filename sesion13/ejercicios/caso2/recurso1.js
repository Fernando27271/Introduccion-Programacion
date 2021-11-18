function venta(){
    //declarar variables
    var st, producto, precio, cantidad, xigv,total,tc,tpd;
    var mensaje;
    //entrada
    producto=prompt("Ingresar producto");
    precio=parseFloat(prompt("Ingrese Precio"));
    cantidad=parseInt(prompt("Ingresar Cantidad"));
    tc=parseFloat(prompt("Ingresar tipo de cambio"));
    //invocar a las funciones
    st=subtotal(precio,cantidad);
    xigv=igv(st);
    total=totalapagar(st,xigv);
    tpd=totalpagard(total,tc);
    mensaje=estado(total);
    //visualizar
    document.write("<br>");
    document.write("<h4> Los Resultados de la venta son: </h4>");
    document.write("<hr>")
    document.write("El subtotal es: "+st.toFixed(2)+"<br>");
    document.write("El IGV es: "+xigv.toFixed(2)+"<br>");
    document.write("El TP soles es:"+total.toFixed(2)+"<br>");
    document.write("El TP dólares es:"+tpd.toFixed(2)+"<br>");
    document.write("Estado de la venta:"+mensaje);
}

function subtotal(xprecio,xcantidad)
{
    return (xprecio*xcantidad);
}

function igv(xsubtotal)
{
    return (xsubtotal*0.18);
}

//función total a pagar
function totalapagar(xsubtotal,xigv)
{
    return (xsubtotal+xigv);
}

//convertir total a pagar a dólares
function totalpagard(xtotal,xtc){
    return (xtotal/xtc);
}

//funcion aviso
function estado(xtp){
    if(xtp>=1000){
        return("Total a pagar elevado");
    }
    else
    {
        return("Total a pagar moderado");
    }
}