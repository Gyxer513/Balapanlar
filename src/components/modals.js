export const lecturersPopup = document.querySelector('.popup_about_lecturers');
export const horizonsPopup = document.querySelector('.popup_about_horizons');
export const himbioPopup = document.querySelector('.popup_about_himbio');

export const lecturersButton = document.querySelector('.partners__logo-button_lecturers');
export const horizonsButton = document.querySelector('.partners__logo-button_horizon');
export const himbioButton = document.querySelector('.partners__logo-button_himbio');

export const pythonButton = document.querySelector("#python");
export const popupContainer = document.querySelector('.popup__window');
export const coursePopup = document.querySelector('.popup_courses');

export const anyPopup = Array.from(document.querySelectorAll('.popup'));
const header = document.querySelector(".header");

export const stickOne = document.querySelector("#bar1");
export const stickTwo = document.querySelector("#bar2");
export const menue = document.querySelector(".burger-menu");

// Плавный скролл для якорных ссылок
const linkCourses = document.querySelectorAll('#link_courses');
const courses = document.querySelector('#courses');
const linkAbout = document.querySelectorAll('#link_about');
const aboutUs = document.querySelector('#about_us');


function scrollSmooth(id) {
	id.scrollIntoView({ behavior: "smooth" });
}

linkCourses.forEach((item) => {
	item.addEventListener('click', () => {
		scrollSmooth(courses);
		menue.classList.remove('burger-menu_opened');
		stickOne.classList.remove("options__stick_rotate-one");
		stickTwo.classList.remove("options__stick_rotate-two");
	});
})

/* linkCourses.addEventListener('click', () => {
	scrollSmooth(courses);
}); */

linkAbout.forEach((item) => {
	item.addEventListener('click', () => {
		scrollSmooth(aboutUs);
		menue.classList.remove('burger-menu_opened');
		stickOne.classList.remove("options__stick_rotate-one");
		stickTwo.classList.remove("options__stick_rotate-two");
	});
})

/* linkAbout.addEventListener('click', () => {
	scrollSmooth(aboutUs);
}); */

export function escHandler(evt) {
	if (evt.key === 'Escape') {
		const openedPopup = document.querySelector('.popup_opened');
		closePopup(openedPopup);
		header.style.display = 'flex';
	}
}

export function openPopup(popup) {
	document.body.style.overflow = "hidden";
	popup.classList.add('popup_opened');
	document.addEventListener('keydown', escHandler);
}

export function closePopup(popup) {
	document.body.style.overflow = "";
	popup.classList.remove('popup_opened');
	if (popup.classList.contains('popup_courses')) {
		clearPopup(popup)
	}
	document.removeEventListener('keydown', escHandler);
}

export function createPopup(selector) {
	const popupElement = document.querySelector(selector).cloneNode(true);
	const popupPaleButton = popupElement.querySelector('.button_pale');
	const popupIcons = popupElement.querySelector('.course-block__for_container');
	const popupButtonContainer = popupElement.querySelector('.course-block__buttons');
	const ulList = popupElement.querySelector('.list_courses');
	const liText = popupElement.querySelectorAll('.list-point__text');
	const closeButtons = Array.from(popupElement.querySelectorAll('.popup__button'))

	popupElement.classList.add('popup_courses_opened');
	popupIcons.classList.add('popup__courses-icons');
	ulList.classList.add('list_courses_popup');

	popupElement.classList.remove('course-block');
	popupButtonContainer.classList.remove('course-block__buttons');
	popupButtonContainer.classList.add('popup__course-buttons');
	popupPaleButton.textContent = "Закрыть";
	popupPaleButton.classList.add('popup__button');

	liText.forEach((item) => {
		item.classList.remove('text-overflow');
	})

	closeButtons.forEach((button) => {
		button.addEventListener('click', (evt) => {
			evt.preventDefault();
			closePopup(coursePopup);
		})
	})
	return popupElement;
}

export function renderPopup(container, element) {
	container.prepend(element);
}

export function clearPopup(container) {
	container.querySelector('.popup_courses_opened').remove();
}
