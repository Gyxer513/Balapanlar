import "../pages/index.css";
const lecturersPopup = document.querySelector('.popup_about_lecturers');
const horizonsPopup = document.querySelector('.popup_about_horizons');
const himbioPopup = document.querySelector('.popup_about_himbio');

const lecturersButton = document.querySelector('.partners_lecturers-button');
const horizonsButton = document.querySelector('.partners_horizon-button');
const himbioButton = document.querySelector('.partners_himbio-button');

const anyPopup = Array.from(document.querySelectorAll('.popup'));

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
    document.removeEventListener ('keydown', escHandler);
  }

lecturersButton.addEventListener ('click', () => openPopup(lecturersPopup));

horizonsButton.addEventListener ('click', () => openPopup(horizonsPopup));

himbioButton.addEventListener ('click', () => openPopup(himbioPopup));

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
