"use strict";
// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll(
  "[data-mobile-menu-open-btn]"
);
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll(
  "[data-mobile-menu-close-btn]"
);
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove("active");
    overlay.classList.remove("active");
  };

  mobileMenuOpenBtn[i].addEventListener("click", function () {
    mobileMenu[i].classList.add("active");
    overlay.classList.add("active");
  });

  // mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
  // overlay.addEventListener("click", mobileMenuCloseFunc);
}

// accordion variables
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    const clickedBtn = this.nextElementSibling.classList.contains("active");

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;

      if (accordion[i].classList.contains("active")) {
        accordion[i].classList.remove("active");
        accordionBtn[i].classList.remove("active");
      }
    }

    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");
  });
}

//search function
const searchIcon = document.querySelector("[search-test]");
const searchInput = document.querySelector("[search-input]");
const searchBtn = document.querySelector("[search-btn]");
//const menuItem = document.querySelector("[menu-case]");
const menuItems = document.querySelectorAll(".menu-category.item"); // Select all menu items

let flag = 0;

searchIcon.onclick = function () {
  if (!flag) {
    searchIcon.style.display = "none";
    searchInput.style.display = "block";
    searchBtn.style.display = "block";
    menuItems.forEach((menuItem) => {
      menuItem.style.display = "none";
    });
    flag = 1;
  }
};
searchBtn.onclick = function () {
  if (flag) {
    searchIcon.style.display = "block";
    menuItems.forEach((menuItem) => {
      menuItem.style.display = "block";
    });
    searchInput.style.display = "none";
    searchBtn.style.display = "none";
    flag = 0;
  }
};
