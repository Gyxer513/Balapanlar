import "../pages/index.css";

const lecturersPopup = document.querySelector('.popup_about_lecturers');
const horizonsPopup = document.querySelector('.popup_about_horizons');
const himbioPopup = document.querySelector('.popup_about_himbio');



const lecturersButton = document.querySelector('.partners_lecturers-button');
const horizonsButton = document.querySelector('.partners_horizon-button');
const himbioButton = document.querySelector('.partners_himbio-button');

const anyPopup = Array.from(document.querySelectorAll('.popup'));

const header = document.querySelector('.header');
const menue = document.querySelector('.burger-menu');
const headerLogo = document.querySelector('.header__logo');
const options = document.querySelector('.options');
const stickOne = document.querySelector('#bar1');
const stickTwo = document.querySelector('#bar2');

const popupExitButton = document.querySelector('.popup__exit');

// изменение хэдэра при скролле
window.onscroll = () => {
    const Y = window.scrollY;

    if(Y > 27) {
        header.classList.add('header_small');
        headerLogo.classList.add('header__logo_scroll');
    } else if(Y < 27) {
        headerLogo.classList.remove('header__logo_scroll');
        header.classList.remove('header_small');
    }
}

// разворачивание бургерного меню на мобильном разрешении
options.addEventListener('click', () => {
    menue.classList.toggle('burger-menu_opened');
    stickOne.classList.toggle('options__stick_rotate-one');
    stickTwo.classList.toggle('options__stick_rotate-two');

})


function escHandler(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
      }
  }

function openPopup (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener ('keydown', escHandler);
  }

function closePopup (popup) {
    popup.classList.remove('popup_opened');
    if (popup.classList.contains('popup_courses')) {
        clearPopup(popup)
    }
    document.removeEventListener ('keydown', escHandler);
  }

lecturersButton.addEventListener ('click', () => openPopup(lecturersPopup));

horizonsButton.addEventListener ('click', () => openPopup(horizonsPopup));

himbioButton.addEventListener ('click', () => openPopup(himbioPopup));

popupExitButton.addEventListener ('click', () => closePopup(coursePopup));


anyPopup.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__button')) {
          closePopup(popup)
        }
    })
  })

//   Пробую сделать вставку элемента в попап
const pythonButton = document.querySelector("#python");
const popupContainer = document.querySelector('.popup__window');
const coursePopup = document.querySelector('.popup_courses');

function createPopup (selector) {
    const popupElement = document.querySelector(selector).cloneNode(true);
    const popupNewButton = popupElement.querySelector('.button_pale');
    const popupIcons = popupElement.querySelector('.course-block__for_container');
    const circle = document.querySelector('.popup__circle-icon');
    const popupIconList = Array.from(popupIcons.querySelectorAll('.image'));

    popupElement.classList.add('courses_opened');
    popupIcons.classList.add('popup_courses-icons');
    popupElement.classList.remove('course-block');
    popupNewButton.textContent = "Закрыть";

    popupIconList.forEach((icon) => {
      icon.src = circle.src;
      icon.alt = circle.alt;
    })

    popupNewButton.addEventListener('click', (evt)=> {
        evt.preventDefault();
        closePopup(coursePopup);
    })
    return popupElement;
}
function renderPopup (container, element) {
    container.prepend(element);
}

function clearPopup (container) {
    container.querySelector('.courses_opened').remove();
}

pythonButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    openPopup(coursePopup);
    renderPopup(popupContainer, createPopup('.course-python'));
})
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -145* (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".pinck-scroll",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=2000",
  }
});

