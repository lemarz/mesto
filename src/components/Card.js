export default class Card {
   constructor(data, templateSelector, handleCardClick) {
      this._titile = data.name
      this._link = data.link
      this._likeAmount = data.likes
      this._templateSelector = templateSelector
      this._handleCardClick = handleCardClick
   }

   _getTemplate() {
      //Копия темплейт разметки под карточку
      return document
         .querySelector(this._templateSelector)
         .content
         .querySelector('.element')
         .cloneNode(true)
   }

   _handleRemoveCard = () => {
      this._newCard.remove()
      this._newCard = null
   }

   _handleLike = () => {
      this._newCard._likeButton.classList.toggle('element__like-button_active')
   };


   _addEventListeners() {
      this._newCard._deleteButton.addEventListener('click', this._handleRemoveCard)
      this._newCard._likeButton.addEventListener('click', this._handleLike)
      this._newCard._imageButton.addEventListener('click', this._handleCardClick)
   }


   createCard() {
      this._newCard = this._getTemplate()
      // Определения граф с информацией
      this._newCard._imageElement = this._newCard.querySelector('.element__image')
      this._newCard._textElement = this._newCard.querySelector('.element__title')
      this._newCard._likeCounter = this._newCard.querySelector('.element__like-counter')
      // Заполнение граф данными информацией из объекта
      this._newCard._textElement.textContent = this._titile
      this._newCard._imageElement.alt = this._titile
      this._newCard._imageElement.src = this._link
      if (this._likeAmount === undefined) {
         this._newCard._likeCounter.textContent = 0
      } else {
         this._newCard._likeCounter.textContent = this._likeAmount.length
      }
      // Определение кнопок на карточке
      this._newCard._deleteButton = this._newCard.querySelector('.element__delete-button')
      this._newCard._likeButton = this._newCard.querySelector('.element__like-button')
      this._newCard._imageButton = this._newCard.querySelector('.element__image')

      this._addEventListeners()

      return this._newCard
   }

}









