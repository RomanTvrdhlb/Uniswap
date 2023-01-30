let headerNav = document.querySelector('.header-nav');
let headerBox = document.querySelector('.header-box');
const navList = document.querySelector('.header-nav__list');
const walletBtn = document.querySelector('.wallet-button');
const footerMobile = document.querySelector('.footer-box');
const aboutBtn = document.querySelector('.about-button');
let breakpoint = 768;


const replaceElements = (element, parentDesktop, parentMobile) => {
  let containerWidth = document.documentElement.clientWidth;
  if (containerWidth <= breakpoint) {
    parentMobile.insertAdjacentElement('beforeend', element);
  };
  if (containerWidth > breakpoint) {
    parentDesktop.insertAdjacentElement('afterbegin', element);
  }
}

const replaceNav = (element, parentDesktop, parentMobile) => {
  let containerWidth = document.documentElement.clientWidth;
  if (containerWidth <= breakpoint) {
    parentMobile.insertAdjacentElement('beforeend', element);
  };
  if (containerWidth > breakpoint) {
    parentDesktop.insertAdjacentElement('beforeend', element);
  }
}

window.addEventListener('resize', () => {
  replaceElements(walletBtn, headerBox, headerNav);
  replaceNav(navList, headerNav, footerMobile);
  replaceElements(aboutBtn, headerBox, footerMobile);
});
window.addEventListener('DOMContentLoaded', () => {
  replaceElements(walletBtn, headerBox, headerNav);
  replaceNav(navList, headerNav, footerMobile);
  replaceElements(aboutBtn, headerBox, footerMobile);
});
