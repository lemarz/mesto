// * popupViewer и источники
const popupViewer = document.querySelector('#viewer-popup')
const imgTitle = popupViewer.querySelector('.popup__viewer-title')
const imgLink = popupViewer.querySelector('.popup__viewer-image')


// * открыть попап
function openPopup(el) {
   el.classList.add('popup_opened');
   document.addEventListener('keydown', handlerEsc)
}

// * закрыть попап
function closePopup(el) {
   el.classList.remove('popup_opened')
   document.removeEventListener('keydown', handlerEsc)
}

// * Ожидание кнопки esc для закрытия попапа
function handlerEsc(evt) {
   if (evt.key === 'Escape') {
      const currentActivePopup = document.querySelector('.popup_opened')
      closePopup(currentActivePopup)
   }
}




export {popupViewer,imgTitle,imgLink,openPopup,closePopup}