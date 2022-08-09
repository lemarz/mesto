import {openPopup} from "./index.js";

// * popupViewer и источники
const popupViewer = document.querySelector('#viewer-popup')
const imgTitle = popupViewer.querySelector('.popup__viewer-title')
const imgLink = popupViewer.querySelector('.popup__viewer-image')

export default class Card {
   constructor(data, templateSelector) {
      this._titile = data.name
      this._link = data.link
      this._templateSelector = templateSelector
   }

  _getTemplate(){
      //Копия темплейт разметки под карточку
     return document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.element')
        .cloneNode(true)
  }

   _handleRemoveCard = () => {
      this._newCard.remove()
   }

   _handleLike = () => {
      this._newCard._likeButton.classList.toggle('element__like-button_active')
   };

   _handleViewCard = () => {
      imgLink.src = this._newCard._imageElement.src
      imgLink.alt = this._newCard._imageElement.alt
      imgTitle.textContent = this._newCard._imageElement.alt
      openPopup(popupViewer)
   };

   _addEventListeners(){
      this._newCard._deleteButton.addEventListener('click',this._handleRemoveCard)
      this._newCard._likeButton.addEventListener('click', this._handleLike)
      this._newCard._imageButton.addEventListener('click', this._handleViewCard)
   }

   renderCard(cardPlace){
      this._newCard = this._getTemplate()

      // Определения граф с информацией
      this._newCard._imageElement = this._newCard.querySelector('.element__image')
      this._newCard._textElement = this._newCard.querySelector('.element__title')

      // Заполнение граф данными информацией из объекта
      this._newCard._textElement.textContent = this._titile
      this._newCard._imageElement.alt = this._titile
      this._newCard._imageElement.src = this._link

      // Определение кнопок на карточке
      this._newCard._deleteButton = this._newCard.querySelector('.element__delete-button')
      this._newCard._likeButton = this._newCard.querySelector('.element__like-button')
      this._newCard. _imageButton = this._newCard.querySelector('.element__image')

      this._addEventListeners()

      document.querySelector(cardPlace).prepend(this._newCard)
   }


}









