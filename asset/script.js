const hamburger = document.querySelector('.hamburger');
const cancel = document.querySelector('.cancel');
const hid = document.querySelector('.hid');

cancel.addEventListener('click', () => {
  hid.style.display = 'none';
});
hamburger.addEventListener('click', () => {
  hid.style.display = 'flex';
});

