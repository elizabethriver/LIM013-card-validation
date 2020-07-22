  
  const validator = {
   

    isValid: function (cardNumber){
        let credicardNumArray = cardNumber.split("");
        let sum = 0;
        let singleNumsArray = []; 
        let doubleNumsArray = [];
        let Arrayfinal = undefined;
        let validCard = false;
  
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
        Arrayfinal = doubleNumsArray.concat (singleNumsArray);
        for (var j = 0; j < Arrayfinal.length; j++) {
          sum += parseInt (Arrayfinal[j]);
        }
        if (sum % 10 === 0){
          validCard = true;
        }
        return validCard;
      }
  
    }

export default validator;
