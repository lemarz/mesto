export default class Section {
   constructor(containerSelector) {
      this._containerSelector = document.querySelector(containerSelector)
   }


   addItem(cardForAdd) {
      this._containerSelector.prepend(cardForAdd)
   }
}

