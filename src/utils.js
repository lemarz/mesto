import Card from "./Card.js";
import PopupWithImage from "./PopupWithImage.js";


// * Информация о профиле
const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')


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

export {handleSubmitEditForm, handleSubmitAddForm, renderer}