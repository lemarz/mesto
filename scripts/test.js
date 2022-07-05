let popup = document.querySelector('.popup');



const addFormElement = addPopup.querySelector('.popup__form')
addPopup.addEventListener('submit', newItemFormSubmitHandler);









function newItemFormSubmitHandler(evt) {
   evt.preventDefault();

   let title = addPopup.querySelector('.popup__input_el_title').value
   let link = addPopup.querySelector('.popup__input_el_link').value
   renderCard(title, link)
   addPopup.querySelector('.popup__input_el_title').value = ''
   addPopup.querySelector('.popup__input_el_link').value = ''

   closePopup(evt)
}



const addButton = document.querySelector('.profile__add-button')
addButton.addEventListener('click', () => {
   openPopup(addPopup)
})



const templateCard = document.querySelector('#card').content //! nax
const cardPlace = document.querySelector('.elements') //! nax



function openViewerPopup(evt) {
   const viewerPop = document.querySelector('.viewer-popup')

   viewerPop.querySelector('.viewer-popup__image').src = evt.target.src
   viewerPop.querySelector('.viewer-popup__title').textContent = evt.target.parentNode.querySelector('.element__title').textContent
   viewerPop.querySelector('.viewer-popup__image').alt = evt.target.parentNode.querySelector('.element__title').textContent

   openPopup(imgPopup)
}

const renderInitialCards = () => {
   initialCards.forEach((item) => {
      renderCard(item.name, item.link)
   }
   )
}
renderInitialCards()


