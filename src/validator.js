  
  const validator = {
   
    
    isValid: function isValid (cardNumber){
        let credicardNumArray = cardNumber.split("");
        let sum = 0;
        let singleNumsArray = []; 
        let doubleNumsArray = [];
        let arrayFinal = undefined;
        let validCard = "Tu tarjeta no es valida";
  
        if (credicardNumArray.length === 16) {
            for (var index = credicardNumArray.length-1; index >=0; index--) {
              if (index % 2 !== 0) {
                singleNumsArray.push(credicardNumArray[index]);
              } else {
                doubleNumsArray.push((credicardNumArray[index]*2).toString());
              }   
            }
          }
          doubleNumsArray = doubleNumsArray.join ("").split("");
          arrayFinal = doubleNumsArray.concat (singleNumsArray);
          for (var j = 0; j < arrayFinal.length; j++) {
            sum += parseInt (arrayFinal[j]);
          }
          if (sum % 10 === 0){
            validCard = "Tu tarjeta es verdadera";
          }
          return validCard;
    },

    maskify: function maskify (cardNumber){
      let stringCardNumber = cardNumber.toString();
      let lengthCardNumber = stringCardNumber.length;
      let resultadoString = "";
      for (var index = 0; index < lengthCardNumber-4; index++) {
        resultadoString += "#";      
      }
      return resultadoString + stringCardNumber.substring(lengthCardNumber-4,lengthCardNumber);     

    }
  
  }

export default validator;
