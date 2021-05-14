// ========== Мой черновик ==========

/*const total = document.querySelector('ul#categories');
const elemEl = document.querySelector('.item');
const elem = document.querySelectorAll('ul#categories .item');
const title = document.querySelectorAll('.item h2');
const list = document.querySelectorAll('.item ul li');


console.log(total);
console.log(elem.length);
console.log(total.children.length);

console.log(elemEl.lastElementChild.children);

const message = `В списке ${elem.length} категории.`;
console.log(message);

title.forEach(tit => {
  console.log(tit);
  const mes = `Категория: ${tit.textContent}`;
  console.log(mes);
  console.log(tit.nextElementSibling.children.length);
});*/

/*const elem = document.querySelectorAll('ul#categories .item');
console.log(elem.length);
const mess = `В списке ${elem.length} категории.`
console.log(mess);
console.log(...elem);*/

/*[...elem].forEach(el => {
  console.log(el.firstElementChild);
  console.log(`Категория: ${el.firstElementChild.textContent}`);
  console.log(el.lastElementChild.children.length);
  console.log(`Количество элементов: ${el.lastElementChild.children.length}`);
});*/

//Символы - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_notation

/*const makeMessage = function (element) {
  let message;
  element.forEach(el => {
    message = `Категория: ${el.firstElementChild.textContent}\nКоличество элементов: ${el.lastElementChild.children.length}`;
    console.log(message = `Категория: ${el.firstElementChild.textContent}\nКоличество элементов: ${el.lastElementChild.children.length}`);
  });

  return message;
}

console.log(makeMessage([...elem]));*/

//forEach - ничего не возвращает, только перебирает

//=======================================================

/*const totalItemsEl = document.querySelectorAll('ul#categories .item');
console.log(`В списке ${totalItemsEl.length} категории.`);

const totalCountCategories = [...totalItemsEl].map(category => {
  return `\nКатегория: ${category.firstElementChild.textContent}\nКоличество элементов: ${category.lastElementChild.children.length}`;
  });

console.log(...totalCountCategories);*/

//=======================================================

const totalItemsEl = document.querySelectorAll('ul#categories .item');
console.log(`В списке ${totalItemsEl.length} категории.`);

totalItemsEl.forEach(category => {
  console.log(`\nКатегория: ${category.firstElementChild.textContent}\nКоличество элементов: ${category.lastElementChild.children.length}`);
});
