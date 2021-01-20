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

let size;
let counter = 1;

console.log('JS working');
console.log({ sliderImgs });
// FUNCTIONS------------------------------------------------------

function autoAdvanceSlide() {
  console.log({ counter });
  console.log('auto slide');
  if (sliderImgs[counter].id === 'copyFirstPic') {
    counter = (sliderImgs.length - counter);
    slider.style.transition = 'none';
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (sliderImgs[counter].id === 'copyLastPic') {
    counter = sliderImgs.length - 2;
    slider.style.transition = 'none';
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  slider.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
}
function resetTimer() {
  clearInterval(myTimer);
  myTimer = setInterval(autoAdvanceSlide, 5000);
}
// Button Listeners
nextBtn.addEventListener('click', () => {
  console.log('NEXT');
  console.log({ size });
  console.log({ counter });

  if (counter >= sliderImgs.length - 1) return;
  slider.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  resetTimer();
});
prevBtn.addEventListener('click', () => {
  if (counter <= 0) { return; }
  slider.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  resetTimer();
});
slider.addEventListener('transitionend', () => {
  if (sliderImgs[counter].id === 'copyFirstPic') {
    counter = (sliderImgs.length - counter);
    slider.style.transition = 'none';
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (sliderImgs[counter].id === 'copyLastPic') {
    counter = sliderImgs.length - 2;
    slider.style.transition = 'none';
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});
// SCRIPT---------------------------------------------------------
window.onload = () => {
  size = sliderImgs[1].clientWidth;
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  console.log({ size });
};
let myTimer = setInterval(autoAdvanceSlide, 5000);

/******/ })()
;
//# sourceMappingURL=main.js.map