import PopupWithForm from "./PopupWithForm";

export default class Api {

   constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
   }

   _handleResponse(res) {
      if (res.ok) {
         return res.json();
      } else {
         return Promise.reject(`Ошибка: ${res.status}`);
      }
   }

   getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, {headers: this._headers}).then(this._handleResponse);
   }

   getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {headers: this._headers}).then(this._handleResponse)
   }

   setUserInfo(userInfo) {
      return fetch(`${this._baseUrl}/users/me`, {
         method: 'PATCH',
         headers: this._headers,
         body: JSON.stringify({
            name: userInfo.name,
            about: userInfo.about
         }),
      }).then(this._handleResponse)
   }

   addCard(title, link) {
      return fetch(`${this._baseUrl}/cards`, {
         method: "POST",
         headers: this._headers,
         body: JSON.stringify({
            name: title,
            link: link
         }),
      }).then(this._handleResponse);
   }

   deleteCard(data) {
      return fetch(`${this._baseUrl}/cards/${data._id}`, {
         method: "DELETE",
         headers: this._headers,
      })
         .then(this._handleResponse)
   }

   setAvatar(avatarUrl) {
      return fetch(`${this._baseUrl}/users/me/avatar `, {
         method: "PATCH",
         headers: this._headers,
         body: JSON.stringify({
            avatar: avatarUrl,
         }),
      })
   }

   likeCard(id) {
      return fetch(`${this._baseUrl}/cards/${id}/likes`, {
         method: "PUT",
         headers: this._headers,
      }).then(this._handleResponse);
   }

   dislikeCard(id) {
      return fetch(`${this._baseUrl}/cards/${id}/likes`, {
         method: "DELETE",
         headers: this._headers,
      }).then(this._handleResponse);
   }
}