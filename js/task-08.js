// ========== Мой черновик ==========

/*Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
после чего рендерится коллекция. При нажатии на кнопку Очистить, 
коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.

<div id="controls">
  <input type="number" min="0" max="100" step="1" />
  <button type="button" data-action="render">Создать</button>
  <button type="button" data-action="destroy">Очистить</button>
</div>

<div id="boxes"></div>*/

/*const controls = document.querySelector('#controls input');
console.log(controls);
const boxes = document.querySelector('#boxes');
const render = document.querySelector('[data-action="render"]');
const destroy = document.querySelector('[data-action="destroy"]');

const div = document.createElement('div');
boxes.append(div);

const renderClick = () => {
  div.classList.add('div');
}

const destroyClick = () => {
  div.classList.remove('div');
}

render.addEventListener('click', renderClick);
destroy.addEventListener('click', destroyClick);

controls.addEventListener('input', onInput);
console.log(controls.value.length === parseInt(controls.dataset.length));

function onInput() {
  if (controls.firstElementChild.nodeValue.length) {
    
  }
}*/

/*const render = document.querySelector('[data-action="render"]');
console.log(render);
const destroy = document.querySelector('[data-action="destroy"]');
console.log(destroy);
const boxes = document.querySelector("#boxes");
console.log(boxes);

render.addEventListener("click", renderBoxes);
console.log(render);
destroy.addEventListener("click", destroyBoxes);

function renderBoxes() {
  const controls = document.querySelector("#controls input");
  console.log(controls.value);
  const amount = controls.value;

  const div = document.createElement("div");
  console.log(div);
  div.classList.add('div');

  console.log(div.style.width = '30px');
  const firstSize = 30;
  const firstIndex = 0;

  //const size = firstSize + amount + 10;
  const size = firstSize + amount * 10;
  //const zIndexEl = firstIndex - amount - 1;
  const zIndexEl = firstIndex - amount - 1;
  
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  const a = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const c = Math.floor(Math.random() * 256);
  div.style.backgroundColor = `rgba(${a}, ${b}, ${c})`;
  div.style.zIndex = `${zIndexEl}`;
  
  boxes.appendChild(div);
  console.log(boxes.appendChild(div));
}

function destroyBoxes() {
  boxes.innerHTML = "";
}*/

//=======================================================

const renderDivEl = document.querySelector('[data-action="render"]');
const destroyDivEl = document.querySelector('[data-action="destroy"]');
const containerBoxesDivEl = document.querySelector("#boxes");

const onRenderNewDiv = () => {
  const controlsInputEl = document.querySelector("#controls input");
  const amount = controlsInputEl.value;

  const divEl = document.createElement("div");
  divEl.classList.add('div');

  const mainSize = 30;
  const mainIndex = 0;

  const otherSize = mainSize + amount * 10;
  const otherIndex = mainIndex - amount - 1;
  
  divEl.style.width = `${otherSize}px`;
  divEl.style.height = `${otherSize}px`;

  const a = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const c = Math.floor(Math.random() * 256);
  divEl.style.backgroundColor = `rgba(${a}, ${b}, ${c})`;
  divEl.style.zIndex = `${otherIndex}`;
  
  containerBoxesDivEl.appendChild(divEl);
}

const onClearAll = () => {
  containerBoxesDivEl.innerHTML = "";
}

renderDivEl.addEventListener("click", onRenderNewDiv);
destroyDivEl.addEventListener("click", onClearAll);