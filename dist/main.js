/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/* eslint-disable no-plusplus */
/* eslint-disable prefer-template */
// CONST AND VARIABLES--------------------------------------------
const slider = document.querySelector('.slider');
const sliderImgs = document.querySelectorAll('.slider img');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
console.log({ sliderImgs });
const size = sliderImgs[1].clientWidth;
console.log('JS working');

let counter = 1;
// FUNCTIONS------------------------------------------------------
console.log({ size });
console.log({ counter });

slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Button Listeners
nextBtn.addEventListener('click', () => {
  console.log('NEXT');
  console.log({ size });
  console.log({ counter });

  if (counter >= sliderImgs.length - 1) return;
  slider.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
prevBtn.addEventListener('click', () => {
  console.log('PREV');
  console.log({ size });
  console.log({ counter });

  if (counter <= 0) return;
  slider.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
slider.addEventListener('transitionend', () => {
  if (sliderImgs[counter].id === 'copyFirstPic') {
    slider.style.transition = 'none';
    counter = sliderImgs.length - 2;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (sliderImgs[counter].id === 'copyLastPic') {
    slider.style.transition = 'none';
    counter = sliderImgs.length - counter;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});
// SCRIPT---------------------------------------------------------

/******/ })()
;
//# sourceMappingURL=main.js.map