const swiper = new Swiper('.swiper', {
  // Optional parameters
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: false,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 2,
    stretch: 0,
    depth: 550,
    modifier: 3,
    slideShadows: false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

///Scrollling animation effect

const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry)=>{
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }  else {
      entry.target.classList.remove('show');
    }
  });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


///Video animationevect

const Home =document.querySelector('.Home');
const video = Home.querySelector('video');
const text = Home.querySelector('h1');
//End dection
const section =document.querySelector('section');
const text1 = section.querySelector('h1');

//scroll magic
const controller = new ScrollMagic.Controller();


///scenes
const scene = new ScrollMagic.Scene({
    duration :350,
    triggerElemnt:Home,
    triggerHook: 0,

})
.addIndicators()
.setPin(Home)
.addTo(controller);


//video animation

let accelamout = 0.1;
let scrollpos = 0;
let delay =0 ;

scene.on('update', e =>{
    scrollpos = e.scrollPos / 100;

}) 

setInterval(() =>{
    delay += (scrollpos-delay) * accelamout;
    console.log(scrollpos, delay);

    video.currentTime = delay;
}, 200);