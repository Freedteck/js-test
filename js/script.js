const dropDown = document.querySelectorAll(".nav");
const navLinks = document.querySelectorAll(".nav-links");
const menu = document.querySelector(".menu");
const mobile = document.querySelector(".mobile");
const links = document.querySelector(".links");

navLinks.forEach((link) => {
  link.classList.add("hidden");
});

const toggler = (parent, child, selector, action, index) => {
  parent.addEventListener(action, () => {
    child[index].classList.toggle(selector);
  });
};

const adder = (parent, child, selector, action, index) => {
  parent.addEventListener(action, () => {
    child[index].classList.add(selector);
  });
};

const remover = (parent, child, selector, action, index) => {
  parent.addEventListener(action, () => {
    child[index].classList.remove(selector);
  });
};

mobile.classList.add("hidden");

dropDown.forEach((drop, index) => {
  adder(drop, navLinks, "visible", "mouseenter", index);
  remover(drop, navLinks, "visible", "mouseleave", index);
});

toggler(menu, [mobile], "visible", "click", 0);

const imgSlider = document.querySelector(".slider");
const slide = document.querySelectorAll(".slide");
const dot = document.querySelectorAll(".dot");
const next = document.getElementById('next')

let currentIndex = 0;

slide[currentIndex].style.display = "block";
dot[currentIndex].style.backgroundColor = "wheat";

const slider = () => {
  dot[currentIndex].style.backgroundColor = "transparent";
  slide[currentIndex].style.display = "none";
  currentIndex++;

  if (currentIndex >= slide.length) {
    currentIndex = 0;
  }
  dot[currentIndex].style.backgroundColor = "wheat";
  slide[currentIndex].style.display = "block";
  
  setTimeout(slider, 3000)
};
/* const back = () => {
  dot[currentIndex].style.backgroundColor = "transparent";
  slide[currentIndex].style.display = "none";
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = slide.length - 1;
  }
  dot[currentIndex].style.backgroundColor = "wheat";
  slide[currentIndex].style.display = "block";

  
};
 */
 slider();