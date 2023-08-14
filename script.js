'use strict';

const loveMe = document.querySelector('.loveMe');
const times = document.getElementById('times');

// loveMe.addEventListener('dblclick', e => {});

let clickTime = 0;
let timesClicked = 0;

const createHeart = e => {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  //   el. position inside container = pos. click -> position of the container -> click - pos. container
  //   const x = e.clientX;
  //   const y = e.clientY;
  //   const leftOffset = e.target.offsetLeft;
  //   const topOffset = e.target.offsetTop;
  //   const xInside = x - leftOffset;
  //   const yInside = y - topOffset;

  const xInside = e.clientX - e.target.offsetLeft;
  const yInside = e.clientY - e.target.offsetTop;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  times.innerText = ++timesClicked;

  setTimeout(() => heart.remove(), 1000);
};

const getTime = () => new Date().getTime();

// manually set double click - click-after-click check time
loveMe.addEventListener('click', e => {
  if (clickTime === 0) {
    clickTime = getTime();
  } else {
    if (getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = getTime();
    }
  }
});
