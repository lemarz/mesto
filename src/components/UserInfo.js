export default class UserInfo {
   constructor({profileNameSelector, profileDescriptionSelector, profileAvatarSelector}) {
      this._profileName = document.querySelector(profileNameSelector)
      this._profileDescription = document.querySelector(profileDescriptionSelector)
      this._profileAvatar = document.querySelector(profileAvatarSelector)
   }

   getUserInfo() {
      const userInfo = {}
      userInfo.name = this._profileName.textContent
      userInfo.description = this._profileDescription.textContent
      return userInfo
   }


   setUserInfo(data) {
      this._profileName.textContent = data.name
      this._profileDescription.textContent = data.about
   }

   setUserAvatar(link) {
      this._profileAvatar.src = link
   }

}