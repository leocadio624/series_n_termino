const CalculoSerie = ({ numero }) => {

    
	/*
	* Autor: Eduardo Bernal
	* Descp: Funcion que se ejecuta cuando se invoca
	* el componente no visual
	* Fecha: 06/05/2024
	*/
    const calcularTermino = (n) => {

      
		

		let ter_primo = getPrimo(n);
		let ter_tri = getTriangular(n-1);
		let ter_fib = getFibonacci(n+2);



		
		return {
			op  : (4 * ter_primo) - ter_tri + ter_fib, ter:n, 
			pri : ter_primo,
			tri : ter_tri,
			fib : ter_fib
		};
		

    };



	

	/*
	* Autor: Eduardo Bernal
	* Descp: Verifica si un numero es primo
	* Fecha: 06/05/2024
	*/
	const esPrimo = (numero) => {

		if (numero <= 1) return false;
		if (numero <= 3) return true;
	
		if (numero % 2 === 0 || numero % 3 === 0) return false;
	
		for (let i = 5; i * i <= numero; i += 6) {
			if (numero % i === 0 || numero % (i + 2) === 0) return false;
		}
	
		return true;
	}

	/*
	* Autor: Eduardo Bernal
	* Descp: Retorna el n esimo numero primo
	* Fecha: 06/05/2024
	*/
	const getPrimo = (n) => {
		
		//caso de error	
		if (n <= 0) return -1
	
		let contador = 0;
		let numero = 2;
	
		while (true) {
			if (esPrimo(numero)) {
				contador++;
				if (contador === n) return numero;
			}
			numero++;
		}
	}

	/*
	* Autor: Eduardo Bernal
	* Descp: Retorna el n esimo numero triangular
	* Fecha: 06/05/2024
	*/
	const getTriangular = (n) => {
        return (n*(n+1))/2
    }

	/*
	* Autor: Eduardo Bernal
	* Descp: Retorna el n esimo termino de la sucesion de fibonacci
	* Fecha: 06/05/2024
	*/
    const getFibonacci =  (nterm) =>{

		let n1 = 0;
		let n2 = 1;
		let contador = 0;
		let serie = []
		
  
		if (nterm <= 0){
			return -1;
  
		}else if(nterm === 1){
			return n1;
			
		}else{
			
			while (contador < nterm){
				serie.push(n1)
				let nth = n1 + n2;
				n1 = n2;
				n2 = nth;   
				contador += 1;
				
			}
			return serie[serie.length-1]
		}
		
	
		}

  
    const resultado = calcularTermino(numero);
  
    return resultado;
  };
  
  export default CalculoSerie;
  