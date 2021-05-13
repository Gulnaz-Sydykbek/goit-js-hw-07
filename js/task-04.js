// ========== Пример Репеты ==========

/*const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

const counter = {
  value: 0,
  
  increment() {
    this.value += 1;
  },

  decrement() {
    this.value -= 1;
  },
}

decrementBtn.addEventListener('click', function () {
  counter.decrement();
  valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
  counter.increment();
  valueEl.textContent = counter.value;
});*/

//=======================================================

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

let value = 0;

const increment = () => {
  value += 1;

  valueEl.textContent = value;
};

const decrement = () => {
  value -= 1;

  if (value === -1) {
    value = 0;
  }

  valueEl.textContent = value;
};

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);