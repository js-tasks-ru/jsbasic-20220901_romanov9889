function hideSelf() {
  console.clear();

const button = document.querySelector('.hide-self-button');
const hideButton = () => button.hidden = true;
button.addEventListener('click', hideButton);
removeEventListener('click', hideButton);
}
