export default class FormValidator {
   constructor(parameters, formName) {
      this._formElementSelector = parameters.formElement
      this._formInputSelector = parameters.formInput
      this._buttonElementSelector = parameters.buttonElement
      this._buttonElementDisabledSelector = parameters.buttonElementDisabled
      this._formNameSelector = formName
      // Текущая форма для валидации
      this._form = document.querySelector(this._formNameSelector)
      // Все инпуты в форме
      this._inputsList = Array.from(this._form.querySelectorAll(this._formInputSelector))
   }

   _setEventListeners(){
      // * 2. Навесить слушатели на инпуты
      this._inputsList.forEach(item => {
         item.addEventListener('input', evt => {
            // * 3. Валидация инпута
            this._validateInput(evt)
            // * 4. Валидация кнопки Submit
            this.isButtonValid()
         })
      })
   }

   // * 3. Валидация инпута
   _validateInput(evtFromInputField){
      this._inputField = evtFromInputField.target
      this._errorField = this._inputField.parentNode.querySelector(`.${evtFromInputField.target.id}-error`)
      this._errorField.textContent = this._inputField.validationMessage
      if (this._inputField.validity.valid) {
         this._hideInputError(this._errorField)
      }
   }

   _hideInputError(){
      this._errorField.textContent = ''
   }

   // * 4. Валидация кнопки Submit
   isButtonValid(){
      this._buttonSubmit = this._form.querySelector(this._buttonElementSelector)
      if (!this._form.checkValidity()){
         this._buttonSubmit.classList.add(this._buttonElementDisabledSelector)
         this._buttonSubmit.disabled = true
      } else {
         this._buttonSubmit.classList.remove(this._buttonElementDisabledSelector)
         this._buttonSubmit.disabled = false
      }
      this._buttonSubmit = null
   }

   resetFormValidityMessage(){
      this._inputsList.forEach((input) => {
         this._form.querySelector(`.${input.id}-error`).textContent = ''
      })
   }
q
   enableValidation(){
      // * 1. Отменить перезагрузки при сабмите
      this._form.addEventListener('submit', evt => evt.preventDefault())

      // * 2. Навесить слушатели на инпуты
      this._setEventListeners()
   }
}
