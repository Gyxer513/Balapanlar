import "../pages/index.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import {
	lecturersButton,
	horizonsButton,
	himbioButton,
	pythonButton,
	lecturersPopup,
	horizonsPopup,
	himbioPopup,
	coursePopup,
	popupContainer,
	openPopup,
	closePopup,
	createPopup,
	renderPopup,
	anyPopup,
} from "../components/modals.js";

const header = document.querySelector(".header");
const menue = document.querySelector(".burger-menu");
const headerLogo = document.querySelector(".header__logo");
const options = document.querySelector(".options");
const stickOne = document.querySelector("#bar1");
const stickTwo = document.querySelector("#bar2");
const wallpaper = document.querySelector('.wallpaper')

// изменение хэдэра при скролле
window.onscroll = () => {
	const Y = window.scrollY;

	if (Y > 27) {
		header.classList.add("header_small");
		headerLogo.classList.add("header__logo_scroll");
		wallpaper.classList.remove("wallpaper_padding");
	} else if (Y < 27) {
		headerLogo.classList.remove("header__logo_scroll");
		header.classList.remove("header_small");
		wallpaper.classList.add("wallpaper_padding");
	}
};

// разворачивание бургерного меню на мобильном разрешении
options.addEventListener("click", () => {
	menue.classList.toggle("burger-menu_opened");
	stickOne.classList.toggle("options__stick_rotate-one");
	stickTwo.classList.toggle("options__stick_rotate-two");
});

// слушатели для открытия попапов партнеров
lecturersButton.addEventListener("click", () => openPopup(lecturersPopup));

horizonsButton.addEventListener("click", () => openPopup(horizonsPopup));

himbioButton.addEventListener("click", () => openPopup(himbioPopup));

// слушатель для закрытия попапов
anyPopup.forEach((popup) => {
	popup.addEventListener("mousedown", (evt) => {
		if (evt.target.classList.contains("popup_opened")) {
			closePopup(popup);
		}
		if (evt.target.classList.contains("popup__button")) {
			closePopup(popup);
		}
	});
});

// слушатель для открытия попапа курса Питон
pythonButton.addEventListener("click", (evt) => {
	evt.preventDefault();
	openPopup(coursePopup);
	renderPopup(popupContainer, createPopup(".course-python"));
});

 if (document.body.clientWidth > 1299) { 
	gsap.registerPlugin(ScrollTrigger);
	const sections = gsap.utils.toArray(".panel");

	gsap.to(sections, {
		xPercent: -285,
		ease: "none",
		scrollTrigger: {
			trigger: ".scroll",
			pin: true,
			scrub: 3,
			snap: 1 / (sections.length - 1),
			// base vertical scrolling on how wide the container is so it feels more natural.
			end: "+=2000",
		},
	});
 }
