let counter = 0;

// Header
const infoLogger = (event) => {
  document.querySelectorAll('a').forEach(a => a.classList.remove('item-link'));
  event.target.closest('a').classList.add('item-link');
}

document.querySelector('.navigation').addEventListener('click', infoLogger);

const scrollDocument = () => {
  let arr = document.getElementsByClassName('link.childNodes');
  if (0 <= window.pageYOffset < 483) {
    arr[0].classList.add('item-link');
    // arr.forEach(a => a.classList.remove('item-link'));
  }
}

window.addEventListener('scroll', scrollDocument);

// Phone
const phoneClickVertical = (event) => {
  let phoneVisibility = document.getElementsByClassName('vertical').item(0);
  if(!phoneVisibility.style.visibility || phoneVisibility.style.visibility === 'hidden') {
    phoneVisibility.style.visibility = 'visible';
  } else {
    phoneVisibility.style.visibility = 'hidden';
  }
}

document.querySelector('.iphone__vertical').addEventListener('click', phoneClickVertical);

const phoneClickHorizontal = (event) => {
  let phoneVisibility = document.getElementsByClassName('horizontal').item(0);
  if(!phoneVisibility.style.visibility || phoneVisibility.style.visibility === 'hidden') {
    phoneVisibility.style.visibility = 'visible';
  } else {
    phoneVisibility.style.visibility = 'hidden';
  }
}

document.querySelector('.iphone__horizontal').addEventListener('click', phoneClickHorizontal);

// Slider
const intervalLeft = (event) => {
  let interval = setInterval(function () {
    document.querySelectorAll('.item').forEach((item) => {
      if (item.style.left === '-1020px') {
        clearInterval(interval);
        return;
      }
      counter -= 5;
      item.style.left = `${counter}px`;
    })
  },10);
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

// Tag
const tagSelector = (event) => {
  console.log(document.getElementsByClassName('portfolio_image'))
  console.log(document.getElementsByClassName('portfolio_image')[0])
  console.log(document.getElementsByClassName('portfolio_image')[1])
  let parent = document.getElementsByClassName('portfolio_image')[0].parentNode;
  let temp = parent.removeChild(document.getElementsByClassName('portfolio_image')[0]);
  parent.appendChild(temp);
  // temp = document.getElementsByClassName('portfolio_image')[0];
  document.getElementsByClassName('portfolio_image')[0] = null;
  // document.getElementsByClassName('portfolio_image')[1] = temp;
  let arr = [...document.getElementsByClassName('portfolio_image')];
  console.log(Array.isArray(arr));
  arr.sort(() => {Math.random()-0.5});
  document.querySelectorAll('button').forEach(img => img.classList.remove('tag-first'));
  event.target.closest('button').classList.add('tag-first');
  
  // console.log(array.sort(() => {Math.random()-0.5}));  
}

document.querySelector('.portfolio-tag').addEventListener('click', tagSelector);


// Image

const pictureSelector = (event) => {
  document.querySelectorAll('img').forEach(img => img.classList.remove('border'));
  event.target.closest('img').classList.add('border');
}

document.querySelector('.portfolio-images').addEventListener('click', pictureSelector);

// Form
document.querySelector("#form").addEventListener("submit", function(e){
  e.preventDefault();
  if (document.querySelector("#subject").value && document.querySelector("#description").value) {
    alert(`Subject: ${document.querySelector("#subject").value} \n Description: ${document.querySelector("#description").value}`);
  } else if (!document.querySelector("#subject").value && document.querySelector("#description").value) {
    alert(`Without subject \n Description: ${document.querySelector("#description").value}`);
  } else if (!document.querySelector("#description").value && document.querySelector("#subject").value) {
    alert(`Subject: ${document.querySelector("#subject").value} \n Without description`);
  } else {
    alert(`Without subject \n Without description`);
  }

  
});