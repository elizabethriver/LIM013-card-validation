import validator from './validator.js';
 
//funcion importa segunda vista

const button1 = document.getElementById('button1');
button1.addEventListener('click', () => {
  document.getElementById('mostrar').style.display = 'block';   
  });

//var userNumInput = document.getElementById("number");
const button2 = document.getElementById('button2');
button2.addEventListener('click', () => {
  const cardNumber= document.getElementById('cardNumber').value;
  validator.isValid(cardNumber);
});
  
