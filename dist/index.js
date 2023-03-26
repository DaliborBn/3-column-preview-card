const sedans = document.querySelector('#i-sedans');
const suvs = document.querySelector('#i-suvs');
const luxury = document.querySelector('#i-luxury');
const btnSedans = document.querySelector('#btn-sedans');
const btnSuvs = document.querySelector('#btn-suvs');
const btnLuxury = document.querySelector('#btn-luxury');

btnSedans.addEventListener('mouseover', () => {
  if (!sedans.classList.contains('animation-1')) {
    sedans.classList.toggle('animation-1');
  } else {
    sedans.classList.toggle('animation-2');
  }
});
btnSuvs.addEventListener('mouseover', () => {
  if (!suvs.classList.contains('animation-1')) {
    suvs.classList.toggle('animation-1');
  } else {
    suvs.classList.toggle('animation-2');
  }
});
btnLuxury.addEventListener('mouseover', () => {
  if (!luxury.classList.contains('animation-1')) {
    luxury.classList.toggle('animation-1');
  } else {
    luxury.classList.toggle('animation-2');
  }
});
