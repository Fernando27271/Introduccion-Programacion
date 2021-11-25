function prueba() {
    var index=0;
    if(document.getElementById('r1').checked){
        index=0;
    }
    if(document.getElementById('r2').checked){
        index=1;
    }
    if(document.getElementById('r3').checked){
        index=2;
    }
    if(document.getElementById('r4').checked){
        index=3;
    }
    return (index);
}

function sorteo() {
    var numale=Math.floor(Math.random()*4);
    var num=prueba();
    if(numale==num){
        var ximagen="img/"+numale+".jpg";
        document.getElementById("fotocambia").src=ximagen;
        document.getElementById("titulo").innerHTML = "Felicitaciones";
    }
    else {
        var ximagen="";
        document.getElementById("fotocambia").src = ximagen;
        document.getElementById("titulo").innerHTML = "Vuelva Intentar";
    }
}