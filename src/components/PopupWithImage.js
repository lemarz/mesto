import Popup from "./Popup.js";


export default class PopupWithImage extends Popup {
   constructor(popupSelector) {
      super(popupSelector);
      this._imageValue = this._popup.querySelector('.popup__viewer-image');
      this._titleValue = this._popup.querySelector('.popup__viewer-title');
   }

   openPopup({name, link}) {
      this._imageValue.src = link
      this._imageValue.alt = `Фотография '${name}'`
      this._titleValue.textContent = name
      super.openPopup()
   }

}