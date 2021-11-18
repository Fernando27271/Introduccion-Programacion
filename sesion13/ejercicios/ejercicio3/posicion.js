function posicion() {
    var balon_oro=["Lewandowski","Benzema","Messi","Cr7","Salah","Mbappé","Kanté","Haaland","Donarumma"];
    i=prompt("¿Quién ganará el balon de oro?");
    document.write("<h1>"+balon_oro.indexOf(i)+" "+i+"</h1>");
}