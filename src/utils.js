// * popupViewer и источники

import Card from "./Card.js";

const popupViewer = document.querySelector('#viewer-popup')
const imgTitle = popupViewer.querySelector('.popup__viewer-title')
const imgLink = popupViewer.querySelector('.popup__viewer-image')


// * Информация о профиле
const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')

// * открыть попап
function openPopup(el) {
   el.classList.add('popup_opened');
   // document.addEventListener('keydown', handlerEsc)
}

// * закрыть попап
function closePopup(el) {
   el.classList.remove('popup_opened')
   // document.removeEventListener('keydown', handlerEsc)
}

// * Добавление карточек
const renderer = (item) => {
   let card = new Card(item, '#card')
   card.renderCard('.elements')
   card = null
}

// * Обработчик формы редактирования профиля
const handleSubmitEditForm = ({name, description}) => {
   profileName.textContent = name
   profileDescription.textContent = description
}

// * Обработчик формы добавления карточки
const handleSubmitAddForm = ({title, link}) => {
   const cardData = {
      name: title,
      link: link
   }
   renderer(cardData)
}


export {popupViewer, imgTitle, imgLink, openPopup, closePopup}
export {handleSubmitEditForm, handleSubmitAddForm, renderer}