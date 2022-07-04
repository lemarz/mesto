const editPopup = document.querySelector('#edit-popup')
const addPopup = document.querySelector('#add-popup')

let editButton = document.querySelector('.profile__edit-button')

const editFormElement = editPopup.querySelector('.popup__form')
editFormElement.addEventListener('submit', editFormSubmitHandler);

const addFormElement = addPopup.querySelector('.popup__form')
addPopup.addEventListener('submit', addFormSubmitHandler);

let profileName = document.querySelector('.profile__name')
let profileDescription = document.querySelector('.profile__description')
let inputName = document.querySelector('.popup__input_el_name')
let inputDescription = document.querySelector('.popup__input_el_description')

function openPopup(el) {
   el.classList.add('popup_opened');
   let elCloseBut = el.querySelector('.popup__close-button')

   let closeButton = el.querySelector('.popup__close-button')
   closeButton.addEventListener('click', closePopup)
}

function closePopup(el) {
   el.target.parentNode.parentNode.classList.remove('popup_opened')
}

function editFormSubmitHandler(evt) {
   evt.preventDefault();
   profileName.textContent = inputName.value
   profileDescription.textContent = inputDescription.value
   closePopup(evt)
}

function addFormSubmitHandler(evt) {
   evt.preventDefault();

   let title = addPopup.querySelector('.popup__input_el_title').value
   let link = addPopup.querySelector('.popup__input_el_link').value
   renderCard(title, link)
   addPopup.querySelector('.popup__input_el_title').value = ''
   addPopup.querySelector('.popup__input_el_link').value = ''

   closePopup(evt)
}

editButton.addEventListener('click', () => {
   inputName.value = profileName.textContent;
   inputDescription.value = profileDescription.textContent;
   openPopup(editPopup)
})


const addButton = document.querySelector('.profile__add-button')
addButton.addEventListener('click', () => {
   openPopup(addPopup)
})


const initialCards = [
   {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
   },
   {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
   },
   {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
   },
   {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
   },
   {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
   },
   {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
   }
];

const templateCard = document.querySelector('#card').content
const cardPlace = document.querySelector('.elements')


const renderCard = (title, link) => {
   const newCard = templateCard.querySelector('.element').cloneNode(true)
   cardPlace.prepend(newCard)
   newCard.querySelector('.element__title').textContent = title
   newCard.querySelector('.element__image').alt = title
   newCard.querySelector('.element__image').src = link

   const deleteButton = newCard.querySelector('.element__delete-button')
   deleteButton.addEventListener('click', handleDelete)

   const likeButton = newCard.querySelector('.element__like-button')
   likeButton.addEventListener('click', handleLike)
}

const renderInitialCards = () => {
   initialCards.forEach((item) => {
      renderCard(item.name, item.link)
   }
   )
}
renderInitialCards()

function handleLike(evt) {
   evt.target.classList.toggle('element__like-button_active')
}

function handleDelete(evt) {
   evt.target.closest('.element').remove()
}