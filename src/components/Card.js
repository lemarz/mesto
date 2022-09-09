export default class Card {
   constructor(data, templateSelector, userId, handleCardClick, delHandler, likeHandler, dislikeHandler) {
      this._titile = data.name
      this._link = data.link
      this._likeAmount = data.likes
      this._templateSelector = templateSelector
      this._handleCardClick = handleCardClick
      this._delHandler = delHandler
      this._data = data
      this._userId = userId
      this._ownerId = this._data.owner._id
      this._likeHandler = likeHandler
      this._dislikeHandler = dislikeHandler

      this._newCard = this._getTemplate()
      // Определения граф с информацией
      this._newCard._imageElement = this._newCard.querySelector('.element__image')
      this._newCard._textElement = this._newCard.querySelector('.element__title')
      this._newCard._likeCounter = this._newCard.querySelector('.element__like-counter')
      // Определение кнопок на карточке
      this._newCard._deleteButton = this._newCard.querySelector('.element__delete-button')
      this._newCard._likeButton = this._newCard.querySelector('.element__like-button')
      this._newCard._imageButton = this._newCard.querySelector('.element__image')
   }

   _getTemplate() {
      //Копия темплейт разметки под карточку
      return document
         .querySelector(this._templateSelector)
         .content
         .querySelector('.element')
         .cloneNode(true)
   }

   handleRemoveCard = () => {
      this._newCard.remove()
      this._newCard = null
   }

   _checkDeleteButtonExistence() {
      if (this._ownerId !== this._userId) {
         this._newCard._deleteButton.remove()
      }
   }

   like = () => {
      this._newCard._likeButton.classList.add('element__like-button_active')
   }

   dislike = () => {
      this._newCard._likeButton.classList.remove('element__like-button_active')
   }

   _checkIsLikedByUser = () => {
      this._data.likes.forEach(likeData => {
         if (likeData._id === this._userId) {
            this.like()
         }
      })
   }

   setLikeCount = (data) => {
      this._newCard._likeCounter.textContent = data.likes.length
   }

   _handleLikeCard = () => {
      if (!this._newCard._likeButton.classList.contains('element__like-button_active')) {
         this._likeHandler(this._data._id)
      } else {
         this._dislikeHandler(this._data._id)
      }
   }

   _addEventListeners() {
      this._newCard._deleteButton.addEventListener('click', this._delHandler)
      this._newCard._likeButton.addEventListener('click', this._handleLikeCard)
      this._newCard._imageButton.addEventListener('click', this._handleCardClick)
   }


   createCard() {
      // Заполнение граф данными информацией из объекта
      this._newCard._textElement.textContent = this._titile
      this._newCard._imageElement.alt = this._titile
      this._newCard._imageElement.src = this._link
      if (this._likeAmount === undefined) {
         this._newCard._likeCounter.textContent = 0
      } else {
         this._newCard._likeCounter.textContent = this._likeAmount.length
      }

      this._checkDeleteButtonExistence()
      this._checkIsLikedByUser()
      this._addEventListeners()

      return this._newCard
   }

}









