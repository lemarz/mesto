export default class Section {
   constructor({items, renderer}, containerSelector) {

      this._items = items
      this._renderer = renderer
      this._containerSelector = document.querySelector(containerSelector)
   }


   // * Рендер начальных карточек
   initRender() {
      this._items.forEach(itemCardData => {
         this._renderer(itemCardData)
      })
   }

   addItem(cardForAdd) {
      this._containerSelector.prepend(cardForAdd)
   }
}

