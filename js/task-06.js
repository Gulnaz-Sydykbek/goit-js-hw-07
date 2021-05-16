// ========== Мой черновик ==========

/*const input = document.querySelector('#validation-input');

const inputLength = input.getAttribute('data-length');

console.log(input.minLength = 6);

if (input.textContent.minLength = 6 === input.textContent.length) {
  console.log('hi');
}*/

/*console.log(input);
console.log(input.getAttribute('data-length'));
console.log(input.value.length);

if (input.textContent.length === 6) {
  console.log('hi');
}*/

/*function onInputLength(event) {
  console.log(input.textContent = event.currentTarget.value.lenght);
  console.log(event);
}

input.addEventListener('input', onInputLength);*/

/*const input = document.querySelector('#validation-input');

const inputLength = input.getAttribute('data-length');

console.log(input.value.length);
console.log(input.dataset.parselInt(inputLength));
console.log(inputLength);*/


/*const input = document.querySelector('#validation-input');
console.log(input.value.length)

const inputLenght = input.getAttribute('data-length');
console.log(inputLenght);
console.log(input.dataset.length);
const totalLenght = parseInt(input.dataset.length);

input.addEventListener('change', onInputChange);

function onInputChange() {
  if (input.value.length === 0) {
    input.classList.remove('valid' && 'invalid');
  } else if (input.value.length === totalLenght) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
}*/

//=======================================================

const validationInputEl = document.querySelector('#validation-input');

const totalLenght = parseInt(validationInputEl.dataset.length);

const onInputChange = () => {
  if (validationInputEl.value.length === 0) {
    validationInputEl.classList.remove('valid');
    validationInputEl.classList.remove('invalid');
  } else if (validationInputEl.value.length === totalLenght) {
    validationInputEl.classList.remove('invalid');
    validationInputEl.classList.add('valid');
  } 
}

validationInputEl.addEventListener('change', onInputChange);