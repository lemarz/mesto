import './index.css';

import {initialCards} from "./initial-сards.js";
import {handleSubmitEditForm, handleSubmitAddForm, renderer} from "./utils.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";


// * Поля формы редактирования
const inputName = document.querySelector('.popup__input_el_name')
const inputDescription = document.querySelector('.popup__input_el_description')
// * Информация о профиле
const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')

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


//!__________

// * Экземпляр класса Section
const section = new Section({
   items: initialCards,
   renderer: renderer
}, '.elements')


// * Экземпляр для #edit-popup
const popupEdit = new PopupWithForm('#edit-popup', handleSubmitEditForm)
popupEdit.setEventListeners()


// * Экземпляр для #add-popup
const popupAdd = new PopupWithForm('#add-popup', handleSubmitAddForm)
popupAdd.setEventListeners()

//!__________

// * Слушатели для редактирования профиля
buttonEdit.addEventListener('click', () => {
   inputName.value = profileName.textContent;
   inputDescription.value = profileDescription.textContent;
   popupEditValidator.resetFormValidityMessage()
   popupEditValidator.isButtonValid()
   popupEdit.openPopup()
})

// * Слушатели для добавления карточки
buttonAdd.addEventListener('click', () => {
   popupAddValidator.resetFormValidityMessage()
   popupAddValidator.isButtonValid()
   popupAdd.openPopup()
})


// * Рендер начальных карточек
section.initRender()