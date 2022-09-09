import Popup from "./Popup";

export default class PopupConfirm extends Popup {
   constructor(popupSelector, delHandler) {
      super(popupSelector)
      this._confirmButton = this._popup.querySelector('.popup__confirm-button')
      this._currentCard = null
      this._delHandler = delHandler
   }

   openPopup(cardData) {
      this._confirmButton.textContent = 'Да'
      super.openPopup()
      this._currentCard = cardData
   }

   setCallback(callBack) {
      this._deleteCardCallBack = callBack
   }

   setEventListeners() {
      super.setEventListeners();
      this._confirmButton.addEventListener('click', (evt) => {
         evt.preventDefault()
         this._confirmButton.textContent = 'Удаление...'
         this._deleteCardCallBack()
         this._delHandler(this._currentCard)
         this._currentCard = null
      })
   }
}