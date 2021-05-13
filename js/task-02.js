// ========== Мой черновик ==========

/*const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const elem = document.querySelector('ul#ingredients');
console.log(elem);
ingredients.forEach(ingredient => {
  console.log(ingredient);
  const items = document.createElement('li');
  console.log(items);
  items.textContent = ingredient;
  elem.appendChild(items);
});*/

//=======================================================

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const containerForIngredientsEl = document.querySelector('ul#ingredients');

ingredients.forEach(ingredient => {
  const itemsForIngredientsEl = document.createElement('li');

  itemsForIngredientsEl.textContent = ingredient;
  containerForIngredientsEl.appendChild(itemsForIngredientsEl);
});