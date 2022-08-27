import {renderCard} from "./index.js";
import {userInfo} from "./index.js";


// * Обработчик формы редактирования профиля
const handleSubmitEditForm = ({name, description}) => {
   userInfo.setUserInfo({name, description})
}

// * Обработчик формы добавления карточки
const handleSubmitAddForm = ({title, link}) => {
   const cardData = {
      name: title,
      link: link
   }
   renderCard(cardData)
}

export {handleSubmitEditForm, handleSubmitAddForm}