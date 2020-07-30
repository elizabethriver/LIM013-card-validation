   //importar objeto validator

import validator from './validator.js';
 
//funcion despliega segunda vista y esconde boton de inicio

const saludos1 = prompt("Bienvenida, ingresa tu nombre");
const nameSaludo = document.getElementById('saludos');
const introduccion = document.getElementById('p');
if (saludos1 == "" || !isNaN (saludos1) || saludos1 == null) {
  alert ("Introduce tu nombre correctamente");
} else {  
  nameSaludo.innerText= `¡Hola ${saludos1}, bienvenida!`;
  introduccion.innerText= `¡Hey! Ya falta poco para procesar tu compra: verifica tu tarjeta`;
}

const button1 = document.getElementById('button1');
function onClickView (){
  document.getElementById('mostrar').style.display = 'block';
  document.getElementById('button1').style.display = 'none';
}
button1.addEventListener('click', onClickView); 

//Id's a utilizar para la validacion datos de formulario
const name = document.getElementById('name');
const lastName = document.getElementById('lastName');
const mes = document.getElementById('mes');
const year = document.getElementById('año');
const cvv = document.getElementById('CVV');
const numberCard = document.getElementById('cardNumber');
const button2 = document.getElementById('button2');

//Id's a utilizar para los resultados finales
const msjClase = document.getElementById("cardMsj");
const mostrarVa = document.getElementById('msjFinal'); 
const validacion = document.getElementById('validación');
const mostrarVal = document.getElementById('msj');
const buttonBack = document.getElementById('reload'); 
//boton de retornar
function goBack (){
  window.location.reload();
} 
buttonBack.addEventListener ('click', goBack);
//funcion para validar numero de tarjeta
function validacionTotal(e) {
//value del formulario
  const name1 = name.value;
  const lastName1 = lastName.value;
  const mes1 = mes.value;
  const year1 = year.value;
  const cvv1 = cvv.value;
//condicion para validar datos del formulario rellenado
  if ( !isNaN(name1) || !isNaN(lastName1) || isNaN(cvv1)){
    return false;
  } 
  
  if (name1==="" || lastName1==="" || mes1==="" || year1 ==="" || cvv1 === "" ) {
    return false;
  }
//condicion para validar número de tarjeta
  const cardNumber = numberCard.value;    
  if((!/\d{16}(~\W[a-zA-Z])*$/g.test(cardNumber)) || (cardNumber.length > 16)){
    return false;  
  }
  //valor de las propiedades del objetivo
  const validacionIsValid = validator.isValid(cardNumber);
  const validacionMaskify = validator.maskify(cardNumber);
   //ocultar formato para tercera vista y vista de resultados
   document.getElementById('h1').style.display = 'none';
   document.getElementById('p').style.display = 'none';
   document.getElementById('ocultar3').style.display = 'none';
   document.getElementById('myForm').style.display = 'none';
  mostrarVa.innerText= `Estimada ${name1}:`;
  validacion.innerText= `${validacionIsValid}`;
  mostrarVal.innerText= `Tu número de tarjeta termina en los últimos ${validacionMaskify} dígitos`;
  msjClase.classList.add('cardMsj');
  document.getElementById('saludos').style.display = 'none'; 
  document.getElementById('mostrar2').style.display = 'block';
  document.getElementById('mostrar1').style.display = 'block';
  e.preventDefault();
}
button2.addEventListener('click', validacionTotal);
  
