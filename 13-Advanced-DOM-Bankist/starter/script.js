'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnscrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

/* for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal); */

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button scrolling
btnscrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page Navigation

// With event delegation

// Event delegation technique
// 1. Add event listeniner to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Without Event delagation
/* document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();

    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
}); */

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

/* // Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header'); // Returns the first element that matches the selector
const allSections = document.querySelectorAll('.section'); // Returns all the elements that match the selector
console.log(allSections);

document.getElementById('section--1'); // selector is by Id
const allButtons = document.getElementsByTagName('button'); // get all buttons and returns an HTMLCollection NOT a node list because it will udpate anytime a button is updated or deleted
console.log(allButtons);

document.getElementsByClassName('btn'); // Returns a live HTML collection

// Creating and inserting elements

const message = document.createElement('div'); //Only creates a div element but does not place it on the page
message.classList.add('cookie-message');
//message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class ="btn btn--close-cookie">Got it!</button>';
//header.prepend(message);
//header.append(message);
//header.append(message.cloneNode(true));

header.before(message);
//header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

const btnscrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnscrollTo.addEventListener('click', function (e) {
  // Smooth scrolling old school

  const s1coords = section1.getBoundingClientRect();
  window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
 
  // Smooth scrolling modern

  section1.scrollIntoView({ behavior: 'smooth' });
});



/* // rgb (255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // stop propagation
  // In general it is not a good idea 
  // to stop the propagation of an event handler
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINKS', e.target, e.currentTarget);
});

// The third parameter can be set 
// to true to listen to caputring 
// phase instead of the bubbling phase
// It is set to false by default
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
}, false); 
const h1 = document.querySelector('h1');

const clH1 = function (e) {
  console.log('hovered over');

  h1.removeEventListener('mouseenter', clH1);
};

h1.addEventListener('mouseenter', clH1);

setTimeout (() => h1.removeEventListener('mouseneter', clH1), 3000); */

// Old way of adding event listeners
// Disadvantage, you can only do one event at a time
/* h1.onmouseenter = function (e) {
  console.log('mouse hovered over');
}; 

/* // Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

//message.style.height =
 // Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
//console.log(getComputedStyle(message).height);

//document.documentElement.style.setProperty('--color-primary', 'orangered')

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); //Abosolute path
console.log(logo.getAttribute('src')); //Relative path
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo'

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));



//Non-standard attributes
console.log(logo.designer); // will not work
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add("c", "j");
logo.classList.remove("c");
logo.classList.toggle("j");
logo.classList.contains("j");

// bad practice, only adds one class and will override other classes
logo.className = 'Jonas' */
