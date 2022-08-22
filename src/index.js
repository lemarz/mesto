import './index.css';

import {initialCards} from "./initial-сards.js";
import {openPopup,closePopup} from "./utils.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

// * Попапы
const popupEdit = document.querySelector('#edit-popup')
const popupAdd = document.querySelector('#add-popup')
const popupViewer = document.querySelector('#viewer-popup')
const popups = document.querySelectorAll('.popup')

// * Поля формы редактирования
const inputName = document.querySelector('.popup__input_el_name')
const inputDescription = document.querySelector('.popup__input_el_description')
// * Информация о профиле
const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')

// * Кнопки открытия попапа
const buttonEdit = document.querySelector('.profile__edit-button')
const buttonAdd = document.querySelector('.profile__add-button')

// * Кнопки закрытия попапа
const buttonClosePopupEdit = popupEdit.querySelector('.popup__close-button')
const buttonClosePopupAdd = popupAdd.querySelector('.popup__close-button')
const buttonClosePopupViewer = popupViewer.querySelector('.popup__close-button')

// * Субмиты
const formElementPopupEdit = popupEdit.querySelector('.popup__form')
const formElementPopupAdd = popupAdd.querySelector('.popup__form')

// * Для рендера карточек
const cardTemplate = '#card'
const cardPlace = '.elements'

// * Поля создания новой карточки
const newCardTitle = popupAdd.querySelector('.popup__input_el_title')
const newCardLink = popupAdd.querySelector('.popup__input_el_link')

// * Параметры для валидатора
const parameters = {
   formElement: '.popup__form',
   formInput: '.popup__input',
   buttonElement: '.popup__save-button',
   buttonElementDisabled: 'popup__save-button_disabled',
}


// * Валидаторы и их включение
const popupAddValidator = new FormValidator(parameters, '[name = add-popup_form]')
popupAddValidator.enableValidation()
const popupEditValidator = new FormValidator(parameters, '[name = edit-popup_form]')
popupEditValidator.enableValidation()



//!__________





// * Внести изменения
function handleProfileFormSubmit(evt) {
   evt.preventDefault();
   profileName.textContent = inputName.value
   profileDescription.textContent = inputDescription.value
   closePopup(popupEdit)
}

// *  Добавить новую карточку пользователя
function handleAddFormSubmit(evt) {
   evt.preventDefault();
   const cardData = {
      name: newCardTitle.value,
      link: newCardLink.value
   }
   const card = new Card(cardData,cardTemplate)
   card.renderCard(cardPlace)
   closePopup(popupAdd)
   formElementPopupAdd.reset()
}

// * Закрытие попапа по клику на оверлей
const handleClickOverlay = (evt) => {
   if(evt.target === evt.currentTarget) {
      closePopup(evt.target);
   }}


//!__________

// * Слушатели для редактирования профиля
buttonEdit.addEventListener('click', () => {
   inputName.value = profileName.textContent;
   inputDescription.value = profileDescription.textContent;
   popupEditValidator.resetFormValidityMessage()
   popupEditValidator.isButtonValid()
   openPopup(popupEdit)
});
buttonClosePopupEdit.addEventListener('click', () => closePopup(popupEdit));
formElementPopupEdit.addEventListener('submit', handleProfileFormSubmit);

// * Слушатели для добавления карточки
buttonAdd.addEventListener('click', () => {
   const addPopupForm = popupAdd.querySelector('.popup__form')
   addPopupForm.reset()
   popupAddValidator.resetFormValidityMessage()
   popupAddValidator.isButtonValid()
   openPopup(popupAdd)
});
buttonClosePopupAdd.addEventListener('click', () => closePopup(popupAdd));
formElementPopupAdd.addEventListener('submit', handleAddFormSubmit);

// * Слушатели для просмотра
buttonClosePopupViewer.addEventListener('click', () => closePopup(popupViewer))

// * Слушатели для закрытия по клику на оверлей
popups.forEach((item) => {
   item.addEventListener('mousedown', (evt)=> {
      handleClickOverlay(evt)
   })
})


// * Рендер начальных карточек
initialCards.forEach(item => {
   const card = new Card(item,cardTemplate)
   card.renderCard(cardPlace)
})