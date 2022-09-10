import './index.css';

import {inputName, inputDescription, buttonEdit, buttonAdd, buttonAvatar, parameters} from "../components/constants.js";

import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Card from "../components/Card.js";
import Api from "../components/Api";
import PopupConfirm from "../components/PopupConfirm";


let userId = null

// * Валидаторы и их включение
const popupAddValidator = new FormValidator(parameters, '[name = add-popup_form]')
popupAddValidator.enableValidation()
const popupEditValidator = new FormValidator(parameters, '[name = edit-popup_form]')
popupEditValidator.enableValidation()
const popupAvatarValidator = new FormValidator(parameters, '[name = avatar-popup_form]')
popupAvatarValidator.enableValidation()

// * Экземпляр для редактирования профиля
const userInfo = new UserInfo({
   profileNameSelector: '.profile__name',
   profileDescriptionSelector: '.profile__description',
   profileAvatarSelector: '.profile__avatar'
})

// * Экземпляр папапа просмотра карточек
const popupView = new PopupWithImage('#viewer-popup')
popupView.setEventListeners()


// * Экземпляр API
const api = new Api({
   baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-49',
   headers: {
      authorization: '163484ca-6b36-4c0d-b70e-87e23e1f729b',
      'Content-Type': 'application/json'
   }
})

//!__________
// *  Экземпляр класса popupConfirm
const popupConfirm = new PopupConfirm('#popup_confirm')
popupConfirm.setEventListeners()
// * Экземпляр класса Section
const cardsContainer = new Section('.elements')

// * Коллбек для открытия карточки
const handleCardClick = card => {
   popupView.openPopup(card)
}
// * Рендер карточек
const renderCard = (cardData) => {
   const card = new Card(cardData, '#card', userId,
      () => handleCardClick(cardData),

      () => {
         popupConfirm.setCallback(() => {
            api.deleteCard(cardData)
               .then(() => {
                  card.handleRemoveCard()
                  popupConfirm.closePopup()
               })
               .catch(err => console.error(err))
         })
         popupConfirm.openPopup(cardData)
      },

      (id) => api.likeCard(id)
         .then(res => {
            card.setLikeCount(res)
            card.like()
         })
         .catch(err => console.error(err)),

      (id) => api.dislikeCard(id)
         .then(res => {
            card.setLikeCount(res)
            card.dislike()
         })
         .catch(err => console.error(err)))

   return card.createCard()
}


// * Обработчик формы редактирования профиля
const handleSubmitEditForm = ({name, description}) => {
   api.setUserInfo({
      name: name,
      about: description
   })
      .then(res => {
         userInfo.setUserInfo(res)
         popupEdit.closePopup()
      })
      .catch(err => console.error(err))
}
// * Экземпляр для #edit-popup
const popupEdit = new PopupWithForm('#edit-popup', handleSubmitEditForm)
popupEdit.setEventListeners()


// * Обработчик формы добавления карточки
const handleSubmitAddForm = ({title, link}) => {
   api.addCard(title, link)
      .then(res => {
         const cardEl = renderCard(res)
         cardsContainer.addItem(cardEl)
         popupAdd.closePopup()
      })
      .catch(err => console.error(err))
}
// * Экземпляр для #add-popup
const popupAdd = new PopupWithForm('#add-popup', handleSubmitAddForm)
popupAdd.setEventListeners()


// * Обработчик формы изменения аватара
const handleSubmitAvatarForm = (data) => {
   api.setAvatar(data.avatar)
      .then(() => {
         userInfo.setUserAvatar(data.avatar)
         avatarPopup.closePopup()
      })
      .catch(err => console.error(err))
}
// * Экземпляр для #avatar-popup
const avatarPopup = new PopupWithForm('#avatar-popup', handleSubmitAvatarForm)
avatarPopup.setEventListeners()

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

// * Слушатели для редактирования аватара
buttonAvatar.addEventListener('click', () => {
   popupAvatarValidator.resetFormValidityMessage()
   popupAvatarValidator.setButtonValid()
   avatarPopup.openPopup()
})

//!__________

// * Описание профиля и начальные карточки с сервера
Promise.all([api.getUserInfo(), api.getInitialCards()])
   .then(([profileData, cards]) => {
      userId = profileData._id
      userInfo.setUserInfo(profileData)
      userInfo.setUserAvatar(profileData.avatar)

      cards.reverse().forEach(cardData => {
         const cardEl = renderCard(cardData)
         cardsContainer.addItem(cardEl)
      })
   })
   .catch(err => console.error(err))