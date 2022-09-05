import Popup from "./Popup";

export default class PopupConfirm extends Popup {
   constructor(popupSelector, delHandler) {
      super(popupSelector)
      this._popup = document.querySelector(popupSelector)
      this._confirmButton = this._popup.querySelector('.popup__confirm-button')
      this._currentCard = null
      this._delHandler = delHandler
   }

   openPopup(cardData, deleteCallback) {
      super.openPopup()
      this._currentCard = cardData
      this.deleteCard = deleteCallback
   }

   setEventListeners() {
      super.setEventListeners();
      this._confirmButton.addEventListener('click', (evt) => {
         evt.preventDefault()
         this._delHandler(this._currentCard, this.deleteCard)
         this._currentCard = null
         this.closePopup()
      })
   }
}