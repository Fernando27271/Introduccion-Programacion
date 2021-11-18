function intercalado() {
    a=[];
    b=[];
    c=[];
    for (i=0;i<=4;i++){
        numA=prompt('Ingresar un número al array "A"');
        a.push(numA);   
    }
    for (j=0;j<=4;j++){
        numB=prompt('Ingresar un número al array "B"');
        b.push(numB);   
    }
    x=0;
    i=0;
    do {
        c[x]=a[i];
        x++;
        c[x]=b[i];
        x++;
        i++;
    } while (i<b.length)

    for(k=0;k<c.length;k++)
    {
        document.write("<h1>"+c[k]+"</h1>")
    }
}