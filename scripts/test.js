let popup = document.querySelector('.popup');



const addFormElement = addPopup.querySelector('.popup__form')
addPopup.addEventListener('submit', newItemFormSubmitHandler);


const templateCard = document.querySelector('#card').content //! nax
const cardPlace = document.querySelector('.elements') //! nax



function openViewerPopup(evt) {
   const viewerPop = document.querySelector('.viewer-popup')

   viewerPop.querySelector('.viewer-popup__image').src = evt.target.src
   viewerPop.querySelector('.viewer-popup__title').textContent = evt.target.parentNode.querySelector('.element__title').textContent
   viewerPop.querySelector('.viewer-popup__image').alt = evt.target.parentNode.querySelector('.element__title').textContent

   openPopup(imgPopup)
}

