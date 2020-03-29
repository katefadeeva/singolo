
// Header
const infoLogger = (event) => {
  document.querySelectorAll('a').forEach(a => a.classList.remove('item-link'));
  event.target.closest('a').classList.add('item-link');
  document.getElementById('menu__toggle').checked = false;
  document.querySelector('body').style.background = '';
  document.querySelector('main').style.opacity = '';
  document.querySelector('body').style.overflow = '';
}

document.querySelector('.navigation').addEventListener('click', infoLogger);

const menuHandler = (event) => {
  document.querySelector('body').style.overflow = 'hidden';
  document.querySelector('body').style.background = '#2D303A';
  document.querySelector('main').style.opacity = '0.6'
}

document.querySelector('#menu__toggle').addEventListener('click', menuHandler);

const scrollDocument = () => {
  let arr = document.querySelectorAll('.link>a');
  if (0 <= window.pageYOffset && window.pageYOffset < 483) {
    arr.forEach(a => a.classList.remove('item-link'));
    arr[0].classList.add('item-link');
  } 
  if (483 <= window.pageYOffset && window.pageYOffset < 941) {
    arr.forEach(a => a.classList.remove('item-link'));
    arr[1].classList.add('item-link');
  }
  if (941 <= window.pageYOffset && window.pageYOffset < 1801) {
    arr.forEach(a => a.classList.remove('item-link'));
    arr[2].classList.add('item-link');
  }
  if (1801 <= window.pageYOffset && window.pageYOffset < 2516) {
    arr.forEach(a => a.classList.remove('item-link'));
    arr[3].classList.add('item-link');
  }
  if (2516 <= window.pageYOffset && window.pageYOffset) {
    arr.forEach(a => a.classList.remove('item-link'));
    arr[4].classList.add('item-link');
  }
}

window.addEventListener('scroll', scrollDocument);

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// Phone
const phoneClickVertical = (event) => {
  let phoneVisibility = document.getElementsByClassName('vertical').item(0);
  if(!phoneVisibility.style.visibility || phoneVisibility.style.visibility === 'hidden') {
    phoneVisibility.style.visibility = 'visible';
  } else {
    phoneVisibility.style.visibility = 'hidden';
  }
}

document.querySelector('.div_vertical').addEventListener('click', phoneClickVertical);
document.querySelector('.vertical').addEventListener('click', phoneClickVertical);

const phoneClickHorizontal = (event) => {
  let phoneVisibility = document.getElementsByClassName('horizontal').item(0);
  if(!phoneVisibility.style.visibility || phoneVisibility.style.visibility === 'hidden') {
    phoneVisibility.style.visibility = 'visible';
  } else {
    phoneVisibility.style.visibility = 'hidden';
  }
}

document.querySelector('.div_horizontal').addEventListener('click', phoneClickHorizontal);
document.querySelector('.horizontal').addEventListener('click', phoneClickHorizontal);

// Slider

let counter = 0;

const intervalLeft = (event) => {
    let interval = setInterval(function () {
      document.querySelectorAll('.item').forEach((item) => {
        if (item.style.left === '-1020px') {
          clearInterval(interval);
          let prnt = item.parentNode;
          prnt.insertBefore(document.querySelectorAll('.item')[0], prnt.childNodes.lastChild);
          document.querySelectorAll('.item').forEach((item) => item.style.left = '0px' );
          counter = 0;
          return;
        }
        counter -= 5;
        item.style.left = `${counter}px`;
      })
    },5);
  }
  
  document.querySelector('.left__arrow').addEventListener('click', intervalLeft);
  
  const intervalRight = (event) => {
    let counter = -1020;
    let prnt = document.querySelector('.item-container');
    prnt.insertBefore(document.querySelectorAll('.item')[1], document.querySelectorAll('.item')[0]);
    document.querySelectorAll('.item').forEach((item) => item.style.left = '-1020px' );
    let interval = setInterval(function () {
      document.querySelectorAll('.item').forEach((item) => {
        if (counter === 0) {
          clearInterval(interval);
          document.querySelectorAll('.item').forEach((item) => item.style.left = '0px' );
          return;
        }
        counter += 5;
        item.style.left = `${counter}px`;
      })
    },3);
  }
  
  document.querySelector('.right__arrow').addEventListener('click', intervalRight);

// Tag
const tagSelector = (event) => {
  console.log(document.getElementsByClassName('portfolio_image'))
  console.log(document.getElementsByClassName('portfolio_image')[0])
  console.log(document.getElementsByClassName('portfolio_image')[1])
  let parent = document.getElementsByClassName('portfolio_image')[0].parentNode;
  let temp = parent.removeChild(document.getElementsByClassName('portfolio_image')[0]);
  parent.appendChild(temp);
  document.getElementsByClassName('portfolio_image')[0] = null;
  
  document.querySelectorAll('button').forEach(img => img.classList.remove('tag-first'));
  event.target.closest('button').classList.add('tag-first');
}

let tags =  document.querySelectorAll('.tag');
tags.forEach((tag) => tag.addEventListener('click', tagSelector));

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
    document.querySelector("#subject").value = '';
    document.querySelector("#description").value = '';
    document.querySelector("#name").value = '';
    document.querySelector("#email").value = '';
  } else if (!document.querySelector("#subject").value && document.querySelector("#description").value) {
    alert(`Without subject \n Description: ${document.querySelector("#description").value}`);
    document.querySelector("#subject").value = '';
    document.querySelector("#description").value = '';
    document.querySelector("#name").value = '';
    document.querySelector("#email").value = '';
  } else if (!document.querySelector("#description").value && document.querySelector("#subject").value) {
    alert(`Subject: ${document.querySelector("#subject").value} \n Without description`);
    document.querySelector("#subject").value = '';
    document.querySelector("#description").value = '';
    document.querySelector("#name").value = '';
    document.querySelector("#email").value = '';
  } else {
    alert(`Without subject \n Without description`);
    document.querySelector("#subject").value = '';
    document.querySelector("#description").value = '';
    document.querySelector("#name").value = '';
    document.querySelector("#email").value = '';
  }
});