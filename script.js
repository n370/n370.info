var nav = document.getElementsByTagName('nav');
var buttons = nav[0].children;
var rect = nav[0].getBoundingClientRect();
var bio = document.getElementById('biography');
var work = document.getElementById('work');
var initialOffset = nav[0].offsetTop;

function stickIt() {
  if (initialOffset <= window.scrollY) {
    nav[0].classList.add('fixed');
    bio.children[0].classList.add('nav-space-placeholder');
  } else {
    nav[0].classList.remove('fixed');
    bio.children[0].classList.remove('nav-space-placeholder');
  }
}

window.onload = function() {
  if (window.scrollY === 0) {
    window.onscroll = stickIt;
  } else {
    window.scrollTo(0,0);
    window.onscroll = stickIt;
  }
}

buttons[0].addEventListener('click', function() {
  bio.classList.add('hidden');
  work.classList.remove('hidden');
  buttons[0].classList.add('active');
  buttons[1].classList.remove('active');
})

buttons[1].addEventListener('click', function() {
  work.classList.add('hidden');
  bio.classList.remove('hidden');
  buttons[1].classList.add('active');
  buttons[0].classList.remove('active');
})
