import validator from './validator.js';
 
//funcion importa segunda vista

const button1 = document.getElementById('button1');
button1.addEventListener('click', () => {
  document.getElementById('mostrar').style.display = 'block';   
  });

//var userNumInput = document.getElementById("number");
const validacion = document.getElementById('validación');
const mostrarVal = document.getElementById('msj');
const button2 = document.getElementById('button2');
button2.addEventListener('click', () => {
  let cardNumber= document.getElementById('cardNumber').value;
  validacion.innerText=validator.isValid(cardNumber);
  mostrarVal.innerText=validator.maskify(cardNumber);
});
  
