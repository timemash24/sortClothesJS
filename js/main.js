const clothesObj = [
  { type: 'top', sex: 'female', size: 'large', color: 'yellow' },
  { type: 'skirts', sex: 'female', size: 'small', color: 'red' },
  { type: 'trousers', sex: 'female', size: 'large', color: 'red' },
  { type: 'top', sex: 'male', size: 'large', color: 'yellow' },
  { type: 'top', sex: 'female', size: 'small', color: 'blue' },
  { type: 'skirts', sex: 'female', size: 'small', color: 'yellow' },
  { type: 'skirts', sex: 'female', size: 'large', color: 'yellow' },
  { type: 'trousers', sex: 'male', size: 'large', color: 'blue' },
  { type: 'trousers', sex: 'male', size: 'large', color: 'red' },
  { type: 'trousers', sex: 'female', size: 'small', color: 'blue' },
  { type: 'top', sex: 'male', size: 'small', color: 'yellow' },
  { type: 'trousers', sex: 'female', size: 'small', color: 'blue' },
  { type: 'top', sex: 'male', size: 'small', color: 'red' },
  { type: 'skirts', sex: 'male', size: 'large', color: 'red' },
  { type: 'skirts', sex: 'male', size: 'large', color: 'blue' },
];

const clothesList = document.querySelector('.clothes_list');
const topBtn = document.querySelector('#top');
const trousersBtn = document.querySelector('#trousers');
const skirtsBtn = document.querySelector('#skirts');
const blueBtn = document.querySelector('blue');
const yellowBtn = document.querySelector('yellow');
const redBtn = document.querySelector('red');
const menuBtns = document.querySelectorAll('.menu button');

const CLOTHES_CLASS = 'clothes';
const HIDDEN = 'hidden';

clothesObj.forEach((clothes) => {
  const li = document.createElement('li');
  li.innerText = `${clothes.type}, ${clothes.color}, ${clothes.sex}, ${clothes.size}`;
  li.classList.add(CLOTHES_CLASS);
  const keys = Object.keys(clothes);
  keys.forEach((key) => {
    li.classList.add(clothes[key]);
  });
  clothesList.appendChild(li);
});

function handleBtnClick(event) {
  const clickedBtn = event.target.id;
  const clothes = document.querySelectorAll('.clothes_list li');
  clothes.forEach((c) => {
    const infoObj = c.classList;
    const infoArr = Object.keys(infoObj).map((item) => infoObj[item]);
    if (infoArr.includes(clickedBtn)) {
      c.classList.remove(HIDDEN);
      if (!infoArr.includes(CLOTHES_CLASS)) {
        c.classList.add(CLOTHES_CLASS);
      }
    } else {
      c.classList.add(HIDDEN);
      c.classList.remove(CLOTHES_CLASS);
    }
  });
}

menuBtns.forEach((btn) => {
  btn.addEventListener('click', handleBtnClick);
});
