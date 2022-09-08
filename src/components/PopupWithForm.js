import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
   constructor(popupSelector, callbackSubmit) {
      super(popupSelector);

      this._callbackSubmit = callbackSubmit
      this._popupForm = this._popup.querySelector('.popup__form')
      this._saveButton = this._popup.querySelector('.popup__save-button')
   }

   _getInputValues() {
      this._inputsList = this._popup.querySelectorAll('.popup__input')
      this._inputValues = {}
      this._inputsList.forEach(item => {
         this._inputValues[item.name] = item.value
      })
      return this._inputValues
   }


   setEventListeners() {
      super.setEventListeners()
      this._popupForm.addEventListener('submit', (evt) => {
         evt.preventDefault()
         this._callbackSubmit(this._getInputValues())
         this._saveButton.textContent = 'Сохранение...'
      })

   }

   closePopup() {
      super.closePopup()
      this._popupForm.reset()
      this._saveButton.textContent = 'Сохранить'
   }

}

