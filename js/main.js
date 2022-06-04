const HIDDEN_CLASS = 'hidden';

// *Fetch the items from the JSON file
function loadItems() {
  return fetch('data/data.json')
    .then((response) => response.json())
    .then((json) => json.items);
}

// *Update the list with the given items
function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

// *Create HTML list item from the given data item
function createHTMLString(items) {
  return `
  <li class="item">
    <img src="${items.image}" alt="${items.type}" class="item__thumbnail" />
      <span class="item__description">${items.gender}, ${items.size}</span>
  </li>
  `;
}

// *Handle button click
function onButtonClick(event, items) {
  const target = event.target;
  const key = target.dataset.key;
  const value = target.dataset.value;

  if (key == null || value == null) {
    return;
  }
  upadateItems(items, key, value);
  // displayItems(items.filter((item) => item[key] === value));
}

// *Make the items matching {key:value} hidden
function upadateItems(items, key, value) {
  const liItems = document.querySelectorAll('.item');
  liItems.forEach((item) => {
    console.log(item.innerHTML);
    const info = item.innerHTML;
    if (info.includes(value)) {
      item.classList.remove(HIDDEN_CLASS);
    } else {
      item.classList.add(HIDDEN_CLASS);
    }
  });
}

function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons');
  logo.addEventListener('click', () => displayItems(items));
  buttons.addEventListener('click', (event) => onButtonClick(event, items));
}

loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);

// ! 이전코드
// const clothesList = document.querySelector('.clothes_list');
// const topBtn = document.querySelector('#top');
// const trousersBtn = document.querySelector('#trousers');
// const skirtsBtn = document.querySelector('#skirts');
// const blueBtn = document.querySelector('blue');
// const yellowBtn = document.querySelector('yellow');
// const redBtn = document.querySelector('red');
// const menuBtns = document.querySelectorAll('.menu button');

// const CLOTHES_CLASS = 'clothes';
// const HIDDEN = 'hidden';

// clothesObj.forEach((clothes) => {
//   const li = document.createElement('li');
//   li.innerText = `${clothes.type}, ${clothes.color}, ${clothes.sex}, ${clothes.size}`;
//   li.classList.add(CLOTHES_CLASS);
//   const keys = Object.keys(clothes);
//   keys.forEach((key) => {
//     li.classList.add(clothes[key]);
//   });
//   clothesList.appendChild(li);
// });

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

// menuBtns.forEach((btn) => {
//   btn.addEventListener('click', handleBtnClick);
// });
