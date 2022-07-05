//* Попапы
const editPopup = document.querySelector('#edit-popup')
const addPopup = document.querySelector('#add-popup')
const viewerPopup = document.querySelector('#viewer-popup')

//* Поля формы редактирования
const inputName = document.querySelector('.popup__input_el_name')
const inputDescription = document.querySelector('.popup__input_el_description')
//* Информация о профиле
const profileName = document.querySelector('.profile__name')
const profileDescription = document.querySelector('.profile__description')


//* кнопки для открытия попапа
const editButton = document.querySelector('.profile__edit-button')
const addButton = document.querySelector('.profile__add-button')


//* кнопки для закрытия попапа
const editPopupCloseButton = editPopup.querySelector('.popup__close-button')
const addPopupCloseButton = addPopup.querySelector('.popup__close-button')

//* Субмиты
const editFormElement = editPopup.querySelector('.popup__form')
const addFormElement = addPopup.querySelector('.popup__form')



//* Для рендера карточек
const templateCard = document.querySelector('#card').content
const cardPlace = document.querySelector('.elements')


//* Поля создания новой карточки
const newCardTitle = addPopup.querySelector('.popup__input_el_title')
const newCardLink = addPopup.querySelector('.popup__input_el_link')

//!______________________________________________________
//!______________________________________________________
//* добавить зарендаренную карточку
function addCard(title, link) {

   cardPlace.prepend(renderCard(title, link))
}

//* зарендорить карточку
function renderCard(title, link) {
   const newCard = templateCard.querySelector('.element').cloneNode(true)
   newCard.querySelector('.element__title').textContent = title
   newCard.querySelector('.element__image').alt = title
   newCard.querySelector('.element__image').src = link

   const deleteButton = newCard.querySelector('.element__delete-button')
   const likeButton = newCard.querySelector('.element__like-button')
   const imageButton = newCard.querySelector('.element__image')

   deleteButton.addEventListener('click', handleDelete)
   likeButton.addEventListener('click', handleLike)
   imageButton.addEventListener('click', () => console.log('открытие viewerPopup'))

   return newCard
}

//* добавить карточки "из коробки"
function createInitialCards() {

   initialCards.forEach((item) => {
      addCard(item.name, item.link)
   }
   )
}

//* открыть попап
function openPopup(el) {
   el.classList.add('popup_opened');
}

//* закрыть попап
function closePopup(el) {
   el.classList.remove('popup_opened')
}


//* Внести изменения
function handleProfileFormSubmit(evt) {
   evt.preventDefault();
   profileName.textContent = inputName.value
   profileDescription.textContent = inputDescription.value
   closePopup(editPopup)
}

//*  Добавить новую карточку пользователя
function handleAddFormSubmit(evt) {
   evt.preventDefault();
   addCard(newCardTitle.value, newCardLink.value)
   closePopup(addPopup)
   newCardTitle.value = ''
   newCardLink.value = ''
}

//* удалить карточку
function handleDelete(evt) {
   evt.target.closest('.element').remove()
}

//* like/dislike
function handleLike(evt) {
   evt.target.classList.toggle('element__like-button_active')
}

//!______________________________________________________
//!______________________________________________________

//* Слушатели для редактирования профиля
editButton.addEventListener('click', () => {
   inputName.value = profileName.textContent;
   inputDescription.value = profileDescription.textContent;
   openPopup(editPopup)
});
editPopupCloseButton.addEventListener('click', () => closePopup(editPopup));
editFormElement.addEventListener('submit', handleProfileFormSubmit);


//* Слушатели для добавления карточки
addButton.addEventListener('click', () => { openPopup(addPopup) });
addPopupCloseButton.addEventListener('click', () => closePopup(addPopup));
addFormElement.addEventListener('submit', handleAddFormSubmit);




createInitialCards()