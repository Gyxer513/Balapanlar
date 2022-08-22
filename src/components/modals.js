export const lecturersPopup = document.querySelector('.popup_about_lecturers');
export const horizonsPopup = document.querySelector('.popup_about_horizons');
export const himbioPopup = document.querySelector('.popup_about_himbio');

export const lecturersButton = document.querySelector('.partners_lecturers-button');
export const horizonsButton = document.querySelector('.partners_horizon-button');
export const himbioButton = document.querySelector('.partners_himbio-button');

export const pythonButton = document.querySelector("#python");
export const popupContainer = document.querySelector('.popup__window');
export const coursePopup = document.querySelector('.popup_courses');

export const anyPopup = Array.from(document.querySelectorAll('.popup'));

export function escHandler(evt) {
	if (evt.key === 'Escape') {
		const openedPopup = document.querySelector('.popup_opened');
		closePopup(openedPopup);
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
	const popupNewButton = popupElement.querySelector('.button_pale');
	const popupIcons = popupElement.querySelector('.course-block__for_container');
	const popupButtonContainer = popupElement.querySelector('.course-block__buttons');

	popupElement.classList.add('popup_courses_opened');
	popupIcons.classList.add('popup__courses-icons');
	popupElement.classList.remove('course-block');
	popupButtonContainer.classList.add('popup__course-buttons');
	popupNewButton.textContent = "Закрыть";

	popupNewButton.addEventListener('click', (evt) => {
		evt.preventDefault();
		closePopup(coursePopup);
	})
	return popupElement;
}

export function renderPopup(container, element) {
	container.prepend(element);
}

export function clearPopup(container) {
	container.querySelector('.popup_courses_opened').remove();
}