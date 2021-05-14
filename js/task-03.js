// ========== Мой черновик ==========

/*const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const container = document.querySelector('ul#gallery');
console.log(container);
console.log(...images);*/

/*const elements = images.map(image => {
  console.log(image);
  const imgEl = document.createElement('img');
  const itemsEl = document.createElement('li');
  console.log(imgEl);
  imgEl.src = image.url;
  imgEl.alt = image.alt;
});*/

/*const elements = images.map(image => {
  return`<li class"items-img"><img src = "${image.url}" alt = "${image.alt}"></li>`;
});

console.log(...elements);*/

/*const makeItemsEl = (options) => {
  return options.map(option => {
    console.log(option.url);
    return `<li class"items-img"><img src="${option.url}" alt="${option.alt}" width = 300 height = 230 /></li>`;
  });
};

const element = makeItemsEl(images);

container.insertAdjacentHTML('beforeend', element);*/

//=======================================================

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryContainerEl = document.querySelector('ul#gallery');

const makeListGallery = (pictures) => {
  return pictures.map(picture => {
    console.log(`<li class="items-img"><img src="${picture.url}" alt="${picture.alt}" width = 400 height = 330 /></li>`);
    return `<li class="items-img"><img src="${picture.url}" alt="${picture.alt}" width = 400 height = 330 /></li>`;
  }).join(' ');
};

const imgGallery = makeListGallery(images);

galleryContainerEl.insertAdjacentHTML('beforeend', imgGallery);