Algoritmo divisionDosNumeros
	//Entrada
	Definir numero1, numero2, numMayor, numMenor Como Entero
	Definir division Como Real
	//Proceso 
	Mostrar  "Ingresar primer n�mero"
	Leer numero1
	Mostrar "Ingresar segundo n�mero"
	Leer numero2
	Si numero1>numero2
		division=numero1/numero2
		numMayor=numero1
		numMenor=numero2
	SiNo
		division=numero2/numero1
		numMayor=numero2
		numMenor=numero1
	FinSi
	//Salida
	Mostrar "Operacion a realizar: " numMayor "/", numMenor   
	Mostrar "Resultado: " division
FinAlgoritmo
