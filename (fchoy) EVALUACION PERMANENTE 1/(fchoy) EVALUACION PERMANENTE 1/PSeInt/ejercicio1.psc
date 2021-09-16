Algoritmo tiendaMonitores
	//Entrada
	Definir cantidad Como Entero 
	Definir precio, montoTotalCon, montoTotalSin, igv Como Real
	Definir nombres, apellidos Como Caracter
	//Proceso 
	Mostrar "Ingresar Nombres"
	Leer nombres
	Mostrar "Ingresar Apellidos"
	Leer apellidos
	Mostrar "Ingresar cantidad de monitores a comprar"
	Leer cantidad
	Mostrar "Ingresar precio de cada monitor"
	Leer precio
	igv=1.18
	montoTotalSin=precio*cantidad
	montoTotalCon=montoTotalSin*igv
	//Salida
	Mostrar  "Nombres y apellidos: " nombres " ", apellidos
	Mostrar "Monto total a pagar sin IGV: " montoTotalSin
	Mostrar "Monto total a pagar con IGV " montoTotalCon
FinAlgoritmo
