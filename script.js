const body = document.querySelector('body');
const header1 = document.querySelector('h1');
const main = document.querySelector('.main');
const container = document.createElement('div');
const clear = document.createElement('button');
const userInput = prompt('Please enter a number: 1 - 100');

body.appendChild(header1);
body.appendChild(main);
body.appendChild(container);
body.appendChild(clear);
body.insertBefore(clear, main);
container.classList.add('container');
clear.classList.add('clear');
clear.textContent = 'Clear';
clear.addEventListener('click', reload);

container.style.height = '960px';
container.style.width = '960px';
container.style.display = 'flex';
container.style.justifyContent = 'space-between';
container.style.alignItems = 'center';
container.style.flexWrap = 'wrap';
check(userInput);

function check(userInput) {
  if (userInput > 100) {
    alert("I just can't do it, Captain! I don't have the power!");
  } else {
    makeCells(userInput);
  }
}

function makeCells() {
  const cellSize = Math.floor(960 / userInput) - 1;
  for (let i = 0; i < userInput; i++) {
    for (let j = 0; j < userInput; j++) {
      const cells = document.createElement('div');
      cells.classList.add('cells');
      container.appendChild(cells);
      cells.style.border = '1px solid black';
      cells.style.height = `${cellSize}px`;
      cells.style.width = `${cellSize}px`;
      cells.addEventListener(
        'mouseenter',
        () => (cells.style.backgroundColor = 'black')
      );
    }
  }
}

function reload() {
  window.location.reload();
}
