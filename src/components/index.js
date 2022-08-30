import "../pages/index.css";
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
const wrapper = document.querySelector('.wrapper')

// изменение хэдэра при скролле
window.onscroll = () => {
	const Y = window.scrollY;

	if (Y > 27) {
		header.classList.add("header_small");
		headerLogo.classList.add("header__logo_scroll");
	} else if (Y < 27) {
		headerLogo.classList.remove("header__logo_scroll");
		header.classList.remove("header_small");
	}
};

// разворачивание бургерного меню на мобильном разрешении
options.addEventListener("click", () => {
	menue.classList.toggle("burger-menu_opened");
	wrapper.toggleAttribute("hidden");
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

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);
const sections = gsap.utils.toArray(".panel");

	gsap.to(sections, {
		xPercent: -100 * (sections.length - 1),
		ease: "none",
		scrollTrigger: {
			trigger: ".scroll",
			id: "scrollObject",
			pin: true,
			scrub: 2,
			snap: 1 / (sections.length - 1),
			// base vertical scrolling on how wide the container is so it feels more natural.
			end: "+=1500",
		},
	});

const trigger = ScrollTrigger.getById("scrollObject");

if (document.body.clientWidth < 1439) {
	trigger.disable();
} else {
	trigger.enable({ reset: true })
};

window.addEventListener("resize", (event) => {
	
	if (document.body.clientWidth < 1439) {
		trigger.disable();
	} else {
		trigger.enable({ reset: true });
	}
});
