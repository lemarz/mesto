let popup = document.querySelector('.popup')
let editButton = document.querySelector('.profile__edit-button')
let closeButton = document.querySelector('.popup__close-button')


function closePopup() {
   popup.classList.remove('popup_opened')
}

editButton.addEventListener('click', () => { popup.classList.add('popup_opened') })

closeButton.addEventListener('click', closePopup)