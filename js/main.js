/* ================= MOBILE NAV ========================= */
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavList1 = document.querySelector('.mob-li-1-eng');
const mobileNavList2 = document.querySelector('.mob-li-2-eng');
const mobileNavList3 = document.querySelector('.mob-li-3-eng');
const mobileNavList4 = document.querySelector('.mob-li-4-eng');
const mobileNavList5 = document.querySelector('.mob-li-5-eng');
const mobileNavList6 = document.querySelector('.mob-li-1-ru');
const mobileNavList7 = document.querySelector('.mob-li-2-ru');
const mobileNavList8 = document.querySelector('.mob-li-3-ru');
const mobileNavList9 = document.querySelector('.mob-li-4-ru');
const mobileNavList10 = document.querySelector('.mob-li-5-ru');

const active = () => {
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
};

mobileNavButton.addEventListener('click', active);
mobileNavList1.addEventListener('click', active);
mobileNavList2.addEventListener('click', active);
mobileNavList3.addEventListener('click', active);
mobileNavList4.addEventListener('click', active);
mobileNavList5.addEventListener('click', active);
mobileNavList6.addEventListener('click', active);
mobileNavList7.addEventListener('click', active);
mobileNavList8.addEventListener('click', active);
mobileNavList9.addEventListener('click', active);
mobileNavList10.addEventListener('click', active);

/* ================= LANGUAGE ========================= */

const langRu = document.getElementById('lang-ru');
const langEng = document.getElementById('lang-eng');

const navRu = document.getElementById('navigation-ru');
const navEng = document.getElementById('navigation-eng');

const nameRu = document.getElementById('my-name-ru');
const nameEng = document.getElementById('my-name-eng');

const myTextRu = document.getElementById('my-text-ru');
const myTextEng = document.getElementById('my-text-eng');

const aboutMeRu = document.getElementById('about-me-ru');
const aboutMeEng = document.getElementById('about-me-eng');

const skillRu = document.getElementById('skills-ru');
const skillEng = document.getElementById('skills-eng');

const portfRu = document.getElementById('portfolio-ru');
const portfEng = document.getElementById('portfolio-eng');

const footerRu = document.getElementById('footer-ru');
const footerEng = document.getElementById('footer-eng');

const mobLangEng = document.getElementById('mob-lang-eng');
const mobLangRu = document.getElementById('mob-lang-ru');

const mobLiEng = document.getElementById('mob-li-eng');
const mobLiRu = document.getElementById('mob-li-ru');



const langClick = () => {
    langRu.classList.toggle('lang-active');
    langEng.classList.toggle('lang-active');
    navRu.classList.toggle('not-active');
    navEng.classList.toggle('not-active');
    nameRu.classList.toggle('not-active');
    nameEng.classList.toggle('not-active');
    myTextRu.classList.toggle('not-active');
    myTextEng.classList.toggle('not-active');
    aboutMeRu.classList.toggle('not-active');
    aboutMeEng.classList.toggle('not-active');
    skillRu.classList.toggle('not-active');
    skillEng.classList.toggle('not-active');
    portfRu.classList.toggle('not-active');
    portfEng.classList.toggle('not-active');
    footerRu.classList.toggle('not-active');
    footerEng.classList.toggle('not-active');
    mobLangRu.classList.toggle('lang-active');
    mobLangEng.classList.toggle('lang-active');
    mobLiEng.classList.toggle('not-active');
    mobLiRu.classList.toggle('not-active');
};


langRu.addEventListener('click', langClick);
langEng.addEventListener('click', langClick);

mobLangRu.addEventListener('click', langClick);
mobLangEng.addEventListener('click', langClick);