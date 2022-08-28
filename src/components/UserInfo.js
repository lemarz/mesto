export default class UserInfo {
   constructor({profileNameSelector, profileDescriptionSelector}) {
      this._profileName = document.querySelector(profileNameSelector)
      this._profileDescription = document.querySelector(profileDescriptionSelector)
   }

   getUserInfo() {
      const userInfo = {}
      userInfo.name = this._profileName.textContent
      userInfo.description = this._profileDescription.textContent
      return userInfo
   }


   setUserInfo({name, description}) {
      this._profileName.textContent = name
      this._profileDescription.textContent = description
   }

}