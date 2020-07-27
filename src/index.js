   //importar objeto validator

import validator from './validator.js';
 
//funcion despliega segunda vista
const button1 = document.getElementById('button1');

function onClickView (){
  document.getElementById('mostrar').style.display = 'block';
  document.getElementById('button1').style.display = 'none';
}
button1.addEventListener('click', onClickView); 

//variables a utilizar para la validacion datos de formulario
const name = document.getElementById('name');
const lastName = document.getElementById('lastName');
const mes = document.getElementById('mes');
const year = document.getElementById('año');
const cvv = document.getElementById('CVV');
const numberCard = document.getElementById('cardNumber');
const button2 = document.getElementById('button2');
const validacion = document.getElementById('validación');
const mostrarVal = document.getElementById('msj'); 
const buttonBack = document.getElementById('reload');
//funcion para validar numero de tarjeta
function validacionTotal(e) {
  function goBack (){
    window.location.reload();
  } 
  buttonBack.addEventListener ('click', goBack);
  
  const name1 = name.value;
  const lastName1 = lastName.value;
  const mes1 = mes.value;
  const year1 = year.value;
  const cvv1 = cvv.value;
//condicion para validar datos del formulario rellenados
  if (name1==="" || lastName1==="" || mes1==="" || year1 ==="" || cvv1 === "" ) {
    return false;
  }
//condicion para validar número de tarjeta
  const cardNumber = numberCard.value;    
  if((!/\d{15,16}(~\W[a-zA-Z])*$/g.test(cardNumber)) || (cardNumber.length > 16)){
    return false;  
  }
  const validacionIsValid = validator.isValid(cardNumber);
  const validacionMaskify = validator.maskify(cardNumber);  
  document.getElementById('myForm').style.display = 'none';
  validacion.innerText= `Tu tarjeta es ${validacionIsValid} `;
  mostrarVal.innerText= `Tu número de tarjeta termina en los últimos ${validacionMaskify} dígitos`;
  document.getElementById('h1').style.display = 'none';
  document.getElementById('p').style.display = 'none';
  e.preventDefault();
}
button2.addEventListener('click', validacionTotal);
  
