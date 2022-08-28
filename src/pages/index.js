import './index.css';

import {initialCards} from "../initial-сards.js";

import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Card from "../components/Card.js";


// * Поля формы редактирования
const inputName = document.querySelector('.popup__input_el_name')
const inputDescription = document.querySelector('.popup__input_el_description')

// * Кнопки открытия попапа
const buttonEdit = document.querySelector('.profile__edit-button')
const buttonAdd = document.querySelector('.profile__add-button')


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

// * Экземпляр для редактирования профиля
const userInfo = new UserInfo({
   profileNameSelector: '.profile__name',
   profileDescriptionSelector: '.profile__description'
})

// * Экземпляр папапа просмотра карточек
const popupView = new PopupWithImage('#viewer-popup')
popupView.setEventListeners()

//!__________

// * Коллбек для открытия карточки
const handleCardClick = (item) => popupView.openPopup(item)
// * Добавление карточек
const renderCard = (cardData) => {
   const card = new Card(cardData, '#card', () => handleCardClick(cardData))
   const cardEl = card.createCard()
   cardsContainer.addItem(cardEl)
}


// * Экземпляр класса Section
const cardsContainer = new Section({
   items: initialCards,
   renderer: renderCard
}, '.elements')
// * Рендер начальных карточек
cardsContainer.initRender()


// * Обработчик формы редактирования профиля
const handleSubmitEditForm = ({name, description}) => userInfo.setUserInfo({name, description})
// * Экземпляр для #edit-popup
const popupEdit = new PopupWithForm('#edit-popup', handleSubmitEditForm)
popupEdit.setEventListeners()


// * Обработчик формы добавления карточки
const handleSubmitAddForm = ({title, link}) => {
   renderCard({
      name: title,
      link: link
   })
}
// * Экземпляр для #add-popup
const popupAdd = new PopupWithForm('#add-popup', handleSubmitAddForm)
popupAdd.setEventListeners()


//!__________

// * Слушатели для редактирования профиля
buttonEdit.addEventListener('click', () => {
   const data = userInfo.getUserInfo()
   inputName.value = data.name
   inputDescription.value = data.description
   popupEditValidator.resetFormValidityMessage()
   popupEditValidator.setButtonValid()
   popupEdit.openPopup()
})

// * Слушатели для добавления карточки
buttonAdd.addEventListener('click', () => {
   popupAddValidator.resetFormValidityMessage()
   popupAddValidator.setButtonValid()
   popupAdd.openPopup()
})