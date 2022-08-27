import Card from "./Card.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo";
import Section from "./Section";


// * Коллбек для открытия карточки
const handleCardClick = (item) => {
   let popupView = new PopupWithImage('#viewer-popup')
   popupView.setEventListeners()
   popupView.openPopup(item)
   popupView = null
}

// * Добавление карточек
const renderer = (item) => {
   let card = new Card(item, '#card', () => handleCardClick(item))
   let section = new Section({
      renderer: renderer
   }, '.elements')
   const cardEl = card.createCard()
   section.addItem(cardEl)
   section = null
   card = null
}
// * Обработчик формы редактирования профиля
const handleSubmitEditForm = ({name, description}) => {
   let userInfo = new UserInfo({
      profileNameSelector: '.profile__name',
      profileDescriptionSelector: '.profile__description'
   })
   userInfo.setUserInfo({name, description})
   userInfo = null
}

// * Обработчик формы добавления карточки
const handleSubmitAddForm = ({title, link}) => {
   const cardData = {
      name: title,
      link: link
   }
   renderer(cardData)
}

export {handleSubmitEditForm, handleSubmitAddForm, renderer}