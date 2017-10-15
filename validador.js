
var identificador = function (){

		var suma_par = 0;
		var suma_impar = 0;
		var multi_pares = 0;
		var multi_impares = 0;
		var resultado = 0;
		var digito_control = 0;
		var BARCODE = new Array();
		var campo = document.getElementById("barcode");
		var dato = document.getElementById("barcode").value;
		var tipo = document.getElementById("type_barcode").value;
		var longitud = dato.length;


		if(tipo=="EAN13" && longitud==12)
		{
			campo.classList.add ("uk-form-success");
			campo.classList.remove ("uk-form-danger");
			console.log('El codigo ingresado es EAN-13')

				for(var i = 0; i<longitud; i++) 
					{
					 	BARCODE[i] = parseInt(dato.charAt(i));

					 	if(i%2 == 1)
					 	{
					 		multi_pares = BARCODE[i] * 3;
					 		suma_par += multi_pares;		
					 	}
					 	else
						 	{
						 		multi_impar = BARCODE[i] * 1;
						 		suma_impar += multi_impar;
						 	}
					}

					
					resultado = suma_par + suma_impar;
					digito_control = 10 - (resultado%10);
					
					console.log('suma impares = ' +suma_impar)
					console.log('suma pares = ' +suma_par)
					console.log('suma total = ' +resultado, 'digito de control = ' +digito_control)

		} 
			else if(tipo=="UPC" && longitud===11 || tipo=="EAN8" && longitud===7)
			{				
				campo.classList.add ("uk-form-success");
				campo.classList.remove ("uk-form-danger");
				if(tipo=="UPC")
				{
					console.log('El codigo ingresado es UPC' )
				} else {
					console.log('El codigo ingresado es EAN8' )
				}

				for(var i = 0; i<longitud; i++) 
					{
					 	BARCODE[i] = parseInt(dato.charAt(i));

					 	if(i%2 == 0)
					 	{
					 		multi_pares = BARCODE[i] * 3;
					 		suma_par += multi_pares;		
					 	}
					 	else
						 	{
						 		multi_impar = BARCODE[i] * 1;
						 		suma_impar += multi_impar;
						 	}
					}

					
					resultado = suma_par + suma_impar;
					digito_control =  10 - (resultado%10);
					
					console.log('suma impares = ' +suma_impar)
					console.log('suma pares = ' +suma_par)
					console.log('suma total = ' +resultado, 'digito de control = ' +digito_control)
			}
				
					else
					{
						campo.classList.remove ("uk-form-success");
						campo.classList.add ("uk-form-danger");
						console.log('El codigo ingresado es invalido')
						
					}
}

	

