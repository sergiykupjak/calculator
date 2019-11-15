let numDiv = document.querySelector('.calc-numbers');
let operationDiv = document.querySelector('.calc-operations');
let inputField = document.querySelector('#inputField');
const keys = [];

window.addEventListener('keydown', function (evt) {
  evt.preventDefault();
  inputField.focus();
  for (let i = 0; i < keys.length; i++) {
    if (evt.keyCode === 13 ||
        evt.keyCode === 187) {
      resultField();
      break;
    }
    if (evt.keyCode === keys[i]) {
      inputField.placeholder += evt.key;
      break;
    }
  }
});

numDiv.addEventListener('click', function (evt) {
  evt.preventDefault();
  let target = event.target;
  if (target.className !== 'calc-numbers__sym') return;
  writeSymbol(target);
});

operationDiv.addEventListener('click', function (evt) {
  evt.preventDefault();
  let target = event.target;
  if (target.className !== 'calc-operations__sym') return;
  writeSymbol(target);
});

function writeSymbol(node) {
  switch (node.innerHTML) {
    case 'C':
      resetField();
      break;
    case '=':
      resultField();
      break;
    default:
      inputField.placeholder += node.innerHTML;
      break;
  }
}

function resetField() {
  inputField.setAttribute('placeholder', '');
}

function resultField() {
  inputField.placeholder = eval(inputField.placeholder);
}
