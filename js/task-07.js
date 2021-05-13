// ========== Мой черновик ==========

/*const size = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

console.log(size);
console.log(text);

console.log(text.style.fontSize = '40px');
console.log(size.value);

const sizePx = size.value + 'px';
console.log(sizePx);

size.addEventListener('input', onTextChange);

function onTextChange() {
  text.style.fontSize = sizePx;
}*/

//=======================================================

const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeControlEl.addEventListener('input', onSizeChange);

function onSizeChange() {
  textEl.style.fontSize = fontSizeControlEl.value + 'px';
};

