"use strict";

// modal variables
const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

// modal function
const modalCloseFunc = function () {
  modal.classList.add("closed");
};

// modal eventListener
// modalCloseOverlay.addEventListener("click", modalCloseFunc);
// modalCloseBtn.addEventListener("click", modalCloseFunc);

// notification toast variables
// const notificationToast = document.querySelector("[data-toast]");
// const toastCloseBtn = document.querySelector("[data-toast-close]");

// notification toast eventListener
// toastCloseBtn.addEventListener("click", function () {
//   notificationToast.classList.add("closed");
// });

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

// // Store the original display values of menu items
// const originalDisplay = [];
// menuItems.forEach((menuItem) => {
//   originalDisplay.push(menuItem.style.display);
// });

// // Function to hide menu items and show search input and button
// function showSearchView() {
//   menuItems.forEach((menuItem) => {
//     menuItem.style.display = "none";
//   });
//   searchInput.style.display = "block";
//   searchBtn.style.display = "block";
// }

// // Function to revert back to the previous view
// function revertToPreviousView() {
//   menuItems.forEach((menuItem, index) => {
//     menuItem.style.display = originalDisplay[index];
//   });
//   searchInput.style.display = "none";
//   searchBtn.style.display = "none";
// }

// // Add event listener for search icon click
// searchIcon.addEventListener("click", showSearchView);

// // Add event listener for search button click
// searchButton.addEventListener("click", revertToPreviousView);
