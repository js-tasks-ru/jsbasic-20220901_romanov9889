
function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  const div = document.querySelector('div');
  const onClick = () => {
    if (div.hidden) {
      div.hidden = false;
      return;
    }
    div.hidden = 'true';
  }
  button.addEventListener('click', onClick)
}
