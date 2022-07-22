//* Попапы
const popupEdit = document.querySelector('#edit-popup')
const popupAdd = document.querySelector('#add-popup')
const popupViewer = document.querySelector('#viewer-popup')
const popups = document.querySelectorAll('.popup')

//* Поля формы редактирования
const inputName = document.querySelector('.popup__input_el_name')
const inputDescription = document.querySelector('.popup__input_el_description')
//* Информация о профиле
const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')

//* Кнопки открытия попапа
const buttonEdit = document.querySelector('.profile__edit-button')
const buttonAdd = document.querySelector('.profile__add-button')

//* Кнопки закрытия попапа
const buttonClosePopupEdit = popupEdit.querySelector('.popup__close-button')
const buttonClosePopupAdd = popupAdd.querySelector('.popup__close-button')
const buttonClosePopupViewer = popupViewer.querySelector('.popup__close-button')

//* Субмиты
const formElementPopupEdit = popupEdit.querySelector('.popup__form')
const formElementPopupAdd = popupAdd.querySelector('.popup__form')

//* Для рендера карточек
const cardTemplate = document.querySelector('#card').content
const cardPlace = document.querySelector('.elements')

//* Поля создания новой карточки
const newCardTitle = popupAdd.querySelector('.popup__input_el_title')
const newCardLink = popupAdd.querySelector('.popup__input_el_link')

//* Источники в popupViewer
const imgTitle = popupViewer.querySelector('.popup__viewer-title')
const imgLink = popupViewer.querySelector('.popup__viewer-image')

//!__________

//* добавить зарендаренную карточку
function addCard(place, title, link) {
   place.prepend(renderCard(title, link))
}

//* зарендорить карточку
function renderCard(title, link) {
   const newCard = cardTemplate.querySelector('.element').cloneNode(true)
   const imageElement = newCard.querySelector('.element__image')
   newCard.querySelector('.element__title').textContent = title
   imageElement.alt = title
   imageElement.src = link

   const deleteButton = newCard.querySelector('.element__delete-button')
   const likeButton = newCard.querySelector('.element__like-button')
   const imageButton = newCard.querySelector('.element__image')

   deleteButton.addEventListener('click', handleDelete)
   likeButton.addEventListener('click', handleLike)
   imageButton.addEventListener('click', viewCard)

   return newCard
}

//* добавить карточки "из коробки"
function createInitialCards() {
   initialCards.forEach((item) => {
      addCard(cardPlace, item.name, item.link)
   })
}

//* Ожидание кнопки esc для закрытия попапа
function handlerEsc(evt) {
   if (evt.key === 'Escape') {
      const currentActivePopup = document.querySelector('.popup_opened')
      closePopup(currentActivePopup)
   }
}

//* открыть попап
function openPopup(el) {
   el.classList.add('popup_opened');
   document.addEventListener('keydown', handlerEsc)
}

//* закрыть попап
function closePopup(el) {
   el.classList.remove('popup_opened')
   document.removeEventListener('keydown', handlerEsc)
}

//* Внести изменения
function handleProfileFormSubmit(evt) {
   evt.preventDefault();
   profileName.textContent = inputName.value
   profileDescription.textContent = inputDescription.value
   closePopup(popupEdit)
}

//*  Добавить новую карточку пользователя
function handleAddFormSubmit(evt) {
   evt.preventDefault();
   addCard(cardPlace, newCardTitle.value, newCardLink.value)
   closePopup(popupAdd)
   formElementPopupAdd.reset()
}

//* удалить карточку
function handleDelete(evt) {
   evt.target.closest('.element').remove()
}

//* like/dislike
function handleLike(evt) {
   evt.target.classList.toggle('element__like-button_active')
}

//* Открыть нужную карточку во viewer
function viewCard(evt) {
   imgLink.src = evt.target.src
   imgLink.alt = evt.target.alt
   imgTitle.textContent = evt.target.alt
   openPopup(popupViewer)
}

//* Закрытие попапа по клику на оверлей
const handleClickOverlay = (evt) => {
   if(evt.target === evt.currentTarget) {
      closePopup(evt.target);
   }}


//!__________

//* Слушатели для редактирования профиля
buttonEdit.addEventListener('click', () => {
   inputName.value = profileName.textContent;
   inputDescription.value = profileDescription.textContent;
   resetFormValidityMessage(popupEdit)
   resetButtonValidity(popupEdit)
   openPopup(popupEdit)
});
buttonClosePopupEdit.addEventListener('click', () => closePopup(popupEdit));
formElementPopupEdit.addEventListener('submit', handleProfileFormSubmit);

//* Слушатели для добавления карточки
buttonAdd.addEventListener('click', () => {
   const addPopupForm = popupAdd.querySelector('.popup__form')
   addPopupForm.reset()
   resetFormValidityMessage(popupAdd)
   resetButtonValidity(popupAdd)
   openPopup(popupAdd)
});
buttonClosePopupAdd.addEventListener('click', () => closePopup(popupAdd));
formElementPopupAdd.addEventListener('submit', handleAddFormSubmit);

//* Слушатели для просмотра
buttonClosePopupViewer.addEventListener('click', () => closePopup(popupViewer))

//* Слушатели для закрытия по клику на оверлей
popups.forEach((item) => {
   item.addEventListener('click', (evt)=> {
      handleClickOverlay(evt)
   })
})

createInitialCards()