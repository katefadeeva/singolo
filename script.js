let counter = 0;

const infoLogger = (event) => {
  document.querySelectorAll('a').forEach(a => a.classList.remove('item-link'));
  event.target.closest('a').classList.add('item-link');
}

document.querySelector('.navigation').addEventListener('click', infoLogger);


const intervalLeft = (event) => {
  let interval = setInterval(function () {
    document.querySelectorAll('.item').forEach((item) => {
      if (item.style.left === '-595px') {
        clearInterval(interval);
        return;
      }
      counter -= 15;
      item.style.left = `${counter}px`;
    })
  },100);
}

document.querySelector('.left__arrow').addEventListener('click', intervalLeft);




// let interval = setInterval(function () {
//   document.querySelectorAll('.item').forEach((item) => {
//     if (item.style.left === '0x') {
//       clearInterval(interval);
//       return;
//     }
//     counter += 15;
//     item.style.left = `${counter}px`;
//   })
// },10);

