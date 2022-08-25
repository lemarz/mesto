export default class Popup {
   constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector)
      this._closeButton = this._popup.querySelector('.popup__close-button')

   }

   openPopup() {
      this._popup.classList.add('popup_opened')
      document.addEventListener('keydown', this._handleEscClose.bind(this))
   }

   closePopup() {
      this._popup.classList.remove('popup_opened')
      document.removeEventListener('keydown', this._handleEscClose.bind(this))
   }

   _handleEscClose(evt) {
      if (evt.key === 'Escape') {
         this.closePopup()
      }
   }


   setEventListeners() {
      // * Закрытие попапа по кнопке
      this._closeButton.addEventListener('click', () => this.closePopup())

      // * Закрытие попапа по клику на оверлей
      this._popup.addEventListener('click', (evt) => {
         if (this._popup === evt.target) {
            this.closePopup()
         }
      })
   }

}

