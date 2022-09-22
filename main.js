//js for opacity fade
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", check_animation);

check_animation();

function check_animation() {
  const trigger = (window.innerHeight / 6) * 6;

  cards.forEach((card) => {
    console.log(card);
    const top = card.getBoundingClientRect().top;

    if (trigger > top) {
      card.classList.add("show_content");
    } else {
      card.classList.remove("show_content");
    }
  });
}

/* JavaScript for toggle */

let navLinks = document.getElementById("navLinks");
let navBarButton = document.getElementById("navBarButton");

function dropDown() {
  navLinks.classList.toggle("dropDownToggle");
}

navBarButton.addEventListener("click", dropDown);

//animation on toggle button

function animateNavButton() {
  navBarButton.classList.add("animatenav");
  navBarButton.addEventListener("animationend", function remove() {
    navBarButton.classList.remove("animatenav");
  });
}

navBarButton.addEventListener("click", animateNavButton);

let zoomElement = document.getElementById("zoom");

function zoomFunc() {
  zoomElement.classList.add("zoomClass");
}

//fade in contact form on load

window.addEventListener("load", zoomFunc);

let formElement = document.getElementById("formId");

function fadeForm() {
  formElement.classList.add("formFadeIn");
}

window.addEventListener("load", fadeForm);

//flip button animation

let flip = document.getElementById("flipFlop");

function flipFunc() {
  flip.classList.add("flipClass");
  flip.addEventListener("animationend", function removeFlip() {
    flip.classList.remove("flipClass");
  });
}

flip.addEventListener("click", flipFunc);

// stop scroll when toggle menu visable

let body = document.getElementById("body");

function stopScroll() {
  body.classList.toggle("stopscroll");
}

navBarButton.addEventListener("click", stopScroll);

/* $('body').bind('touchmove', function(e){e.preventDefault()})
$('body').unbind('touchmove') */
