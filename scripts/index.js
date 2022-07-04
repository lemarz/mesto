let popup = document.querySelector('.popup')
let editButton = document.querySelector('.profile__edit-button')
let closeButton = document.querySelector('.popup__close-button')
let formElement = document.querySelector('.popup__form')
let profileName = document.querySelector('.profile__name')
let profileDescription = document.querySelector('.profile__description')
let inputName = document.querySelector('.popup__input_el_name')
let inputDescription = document.querySelector('.popup__input_el_description')


function openPopup() {
   inputName.value = profileName.textContent;
   inputDescription.value = profileDescription.textContent;
   popup.classList.add('popup_opened');
}

function closePopup() {
   popup.classList.remove('popup_opened')
}

function formSubmitHandler(evt) {
   evt.preventDefault();
   profileName.textContent = inputName.value
   profileDescription.textContent = inputDescription.value
   closePopup()
}


editButton.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)
formElement.addEventListener('submit', formSubmitHandler);

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


let renderCard = (title, link) => {
   const newCard = templateCard.querySelector('.element').cloneNode(true)
   cardPlace.append(newCard)
   newCard.querySelector('.element__title').textContent = title
   newCard.querySelector('.element__image').alt = title
   newCard.querySelector('.element__image').src = link
}


let renderInitialCards = () => {
   initialCards.forEach((item, index) => {
      renderCard(item.name, item.link)
   }
   )
}

renderInitialCards()
