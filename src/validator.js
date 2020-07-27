  //objeto validator

  const validator = {
   
   //metodo isvalid
   
    isValid: (cardNumber) => {
  //definicion de variables locales
      
        let credicardNumArray = cardNumber.split("");
        let sum = 0;
        let singleNumsArray = []; 
        let doubleNumsArray = [];
        let arrayFinal = undefined;
        let validCard = "errónea";
  //condicionales segun algoritmo de lurhn
  //Si la longitud del array es igual a 16 se aplica para cada indice, la siguiente condicion
// si el modulo es igual a 0, o par, el indice se añade al array singlenums
  //En caso contrario se añade al array siglenumbs y se multiplica por 2, convirtiendolo en un string
        if (credicardNumArray.length === 16) {  
          for (var index = credicardNumArray.length-1; index >=0; index--) {
              if (index % 2 !== 0) {
                singleNumsArray.push(credicardNumArray[index]);
              } else {
                doubleNumsArray.push((credicardNumArray[index]*2).toString());
              }   
            }
          }
  //Se aplica el metodo join para unir elementos de string y luego split para separarlas como array
  //se construye el array final entre doubleNumsArray y singleNumsArray con metodo concat

          doubleNumsArray = doubleNumsArray.join ("").split("");
          arrayFinal = doubleNumsArray.concat (singleNumsArray);
  //se utiliza for para cada indice del array final, que se convierte en inter y se agrega a la var sum
        
          for (var j = 0; j < arrayFinal.length; j++) {
            sum += parseInt (arrayFinal[j]);
          }
  //si la var sum, su modulo entre 10 es igual a 0, se valida la tarjeta, en caso contrario, se rechaza

          if (sum % 10 === 0){
            validCard = "verdadera";
          }
          return validCard;
    },
   //metodo maskify
    maskify: (cardNumber) => {
   //se establecen las variables a utilizar 
      let stringCardNumber = cardNumber.toString();
      let lengthCardNumber = stringCardNumber.length;
      let resultadoString = "";
     //se establece un for para cada indice de la var lengthCardNumber, menos los ultimos 4 digitos, el cual estara reemplazado por el # 
      for (var index = 0; index < lengthCardNumber-4; index++) {
        resultadoString += "#";      
      }
      //se establece un resultado: valor string de resultadoString + los 4 ultimos digitos visibles

      return resultadoString + stringCardNumber.substring(lengthCardNumber-4,lengthCardNumber);     
    }
  
  }
   //exportar objeto validator

export default validator;
