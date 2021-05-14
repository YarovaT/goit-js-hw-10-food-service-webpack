import cardMenuTml from './templates/menu.hbs';
import cards from './menu.json';

import './styles.css';

const menuContainer = document.querySelector('.js-menu');

const cardsMenu = createCardsMenu(cards);

menuContainer.insertAdjacentHTML('afterbegin', cardsMenu);

function createCardsMenu(cards) {
  return cards.map(cardMenuTml).join('');
}

/*Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.
По умолчанию тема светлая.
При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.
Для удобства хранения списка тем используй такое перечисление.*/

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputRef = document.querySelector('#theme-switch-toggle');
/*Добавляет функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.*/
inputRef.addEventListener('change', changedTheme);

function changedTheme(evt) {
  evt.currentTarget.checked ? darkTheme() : lightTheme();
}

/*Добавляет тему по умолчанию.*/
function defaultTheme() {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === Theme.LIGHT || currentTheme === null) {
    lightTheme();
    return;
  }

  if (currentTheme === Theme.DARK) {
    darkTheme();
    return;
  }
}

defaultTheme();

/*добавляeт на элемент body класс light-theme или dark-theme.*/
function darkTheme() {
  document.body.classList.add(Theme.DARK);
  document.body.classList.remove(Theme.LIGHT);
  localStorage.setItem('background', Theme.DARK);
  inputRef.checked = true;
}

function lightTheme() {
  document.body.classList.add(Theme.LIGHT);
  document.body.classList.remove(Theme.DARK);
  localStorage.setItem('background', Theme.LIGHT);
  inputRef.checked = false;
}
