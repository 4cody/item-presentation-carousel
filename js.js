//
const boxs = document.querySelectorAll('.box');

//  html elements
let b1 = boxs[0];
let b2 = boxs[1];
let b3 = boxs[2];

//  css class's with position styling
const p1 = 'p1';
const p2 = 'p2';
const p3 = 'p3';

// handle box click
const adjustPos = (e) => {
  const c = e.target;
  switch (c) {
    case b1:
      b1.classList.add(p1);
      b1.classList.remove(p2);
      b1.classList.remove(p3);

      b2.classList.add(p2);
      b2.classList.remove(p1);
      b2.classList.remove(p3);

      b3.classList.add(p3);
      b3.classList.remove(p1);
      b3.classList.remove(p2);

      break;

    case b2:
      b1.classList.add(p3);
      b1.classList.remove(p1);
      b1.classList.remove(p2);

      b2.classList.add(p1);
      b2.classList.remove(p2);
      b2.classList.remove(p3);

      b3.classList.add(p2);
      b3.classList.remove(p1);
      b3.classList.remove(p3);

      break;

    case b3:
      b1.classList.add(p2);
      b1.classList.remove(p1);
      b1.classList.remove(p3);

      b2.classList.add(p3);
      b2.classList.remove(p1);
      b2.classList.remove(p2);

      b3.classList.add(p1);
      b3.classList.remove(p2);
      b3.classList.remove(p3);
      break;

    default:
      console.log('something broke');
      break;
  }
};

//  initial positioning
b1.classList.add(p1);
b2.classList.add(p2);
b3.classList.add(p3);

boxs.forEach((b) => {
  b.addEventListener('click', adjustPos);
});

// (e) => {
//   if (e.target === b2) {
//     console.log('hi');
//   } else {
//     console.log(e.target);
//   }
// }
