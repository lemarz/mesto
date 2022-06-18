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