// ========== Пример Репеты ==========

/*const refs = {
  input: document.querySelector('#name-input'),
  nameLabel: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange (event) => {
  refs.nameLabel.textContent = event.currentTarget.value;
}*/

//=======================================================

const refs = {
  nameInput: document.querySelector('#name-input'),
  nameOutput: document.querySelector('#name-output'),
}

const onInputChange = (event) => {
  if (refs.nameInput.textContent = event.currentTarget.value === '') {
    return refs.nameOutput.textContent = 'незнакомец';
  }

  refs.nameOutput.textContent = event.currentTarget.value;
}

refs.nameInput.addEventListener('input', onInputChange);