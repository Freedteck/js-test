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
