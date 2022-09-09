/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._formElementSelector=e.formElement,this._formInputSelector=e.formInput,this._buttonElementSelector=e.buttonElement,this._buttonElementDisabledSelector=e.buttonElementDisabled,this._formNameSelector=n,this._form=document.querySelector(this._formNameSelector),this._buttonSubmit=this._form.querySelector(this._buttonElementSelector),this._inputsList=Array.from(this._form.querySelectorAll(this._formInputSelector))}var n,r;return n=t,(r=[{key:"_setEventListeners",value:function(){var e=this;this._inputsList.forEach((function(t){t.addEventListener("input",(function(t){e._validateInput(t),e.setButtonValid()}))}))}},{key:"_validateInput",value:function(e){this._inputField=e.target,this._errorField=this._inputField.parentNode.querySelector(".".concat(e.target.id,"-error")),this._errorField.textContent=this._inputField.validationMessage,this._inputField.validity.valid&&this._hideInputError(this._errorField)}},{key:"_hideInputError",value:function(){this._errorField.textContent=""}},{key:"setButtonValid",value:function(){this._form.checkValidity()?(this._buttonSubmit.classList.remove(this._buttonElementDisabledSelector),this._buttonSubmit.disabled=!1):(this._buttonSubmit.classList.add(this._buttonElementDisabledSelector),this._buttonSubmit.disabled=!0)}},{key:"resetFormValidityMessage",value:function(){var e=this;this._inputsList.forEach((function(t){e._form.querySelector(".".concat(t.id,"-error")).textContent=""}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){return e.preventDefault()})),this._setEventListeners()}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._containerSelector=document.querySelector(t)}var t,r;return t=e,(r=[{key:"addItem",value:function(e){this._containerSelector.prepend(e)}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.closePopup()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close-button")}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"closePopup",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){return e.closePopup()})),this._popup.addEventListener("click",(function(t){e._popup===t.target&&e.closePopup()}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=l(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},c.apply(this,arguments)}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._callbackSubmit=t,n._popupForm=n._popup.querySelector(".popup__form"),n._saveButton=n._popup.querySelector(".popup__save-button"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputsList=this._popup.querySelectorAll(".popup__input"),this._inputValues={},this._inputsList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;c(p(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._callbackSubmit(e._getInputValues()),e._saveButton.textContent="Сохранение..."}))}},{key:"closePopup",value:function(){c(p(a.prototype),"closePopup",this).call(this),this._popupForm.reset(),this._saveButton.textContent="Сохранить"}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t){var n=t.profileNameSelector,r=t.profileDescriptionSelector,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileDescription=document.querySelector(r),this._profileAvatar=document.querySelector(o)}var t,n;return t=e,n=[{key:"getUserInfo",value:function(){var e={};return e.name=this._profileName.textContent,e.description=this._profileDescription.textContent,e}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.name,this._profileDescription.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._profileAvatar.src=e}}],n&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function k(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._imageValue=t._popup.querySelector(".popup__viewer-image"),t._titleValue=t._popup.querySelector(".popup__viewer-title"),t}return t=a,(n=[{key:"openPopup",value:function(e){var t=e.name,n=e.link;this._imageValue.src=n,this._imageValue.alt="Фотография '".concat(t,"'"),this._titleValue.textContent=t,v(C(a.prototype),"openPopup",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(){function e(t,n,r,o,i,a,u){var c=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),E(this,"handleRemoveCard",(function(){c._newCard.remove(),c._newCard=null})),E(this,"like",(function(){c._newCard._likeButton.classList.add("element__like-button_active")})),E(this,"dislike",(function(){c._newCard._likeButton.classList.remove("element__like-button_active")})),E(this,"_isLiked",(function(){c._data.likes.forEach((function(e){e._id===c._userId&&c.like()}))})),E(this,"setLikeCount",(function(e){c._newCard._likeCounter.textContent=e.likes.length})),this._titile=t.name,this._link=t.link,this._likeAmount=t.likes,this._templateSelector=n,this._handleCardClick=o,this._delHandler=i,this._data=t,this._userId=r,this._ownerId=this._data.owner._id,this._likeHandler=a,this._dislikeHandler=u}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"isOwner",value:function(){this._ownerId!==this._userId&&this._newCard._deleteButton.remove()}},{key:"_addEventListeners",value:function(){var e=this;this._newCard._deleteButton.addEventListener("click",this._delHandler),this._newCard._likeButton.addEventListener("click",(function(){e._newCard._likeButton.classList.contains("element__like-button_active")?(e._dislikeHandler(e._data._id),e.dislike()):(e._likeHandler(e._data._id),e.like())})),this._newCard._imageButton.addEventListener("click",this._handleCardClick)}},{key:"createCard",value:function(){return this._newCard=this._getTemplate(),this._newCard._imageElement=this._newCard.querySelector(".element__image"),this._newCard._textElement=this._newCard.querySelector(".element__title"),this._newCard._likeCounter=this._newCard.querySelector(".element__like-counter"),this._newCard._textElement.textContent=this._titile,this._newCard._imageElement.alt=this._titile,this._newCard._imageElement.src=this._link,void 0===this._likeAmount?this._newCard._likeCounter.textContent=0:this._newCard._likeCounter.textContent=this._likeAmount.length,this._newCard._deleteButton=this._newCard.querySelector(".element__delete-button"),this._newCard._likeButton=this._newCard.querySelector(".element__like-button"),this._newCard._imageButton=this._newCard.querySelector(".element__image"),this.isOwner(),this._isLiked(),this._addEventListeners(),this._newCard}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,n=[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._handleResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._handleResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._handleResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e._id),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}},{key:"setAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar "),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}},{key:"likeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._handleResponse)}},{key:"dislikeCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._handleResponse)}}],n&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function T(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popup=document.querySelector(e),n._confirmButton=n._popup.querySelector(".popup__confirm-button"),n._currentCard=null,n._delHandler=t,n}return t=a,(n=[{key:"openPopup",value:function(e,t){q(U(a.prototype),"openPopup",this).call(this),this._currentCard=e,this.deleteCard=t}},{key:"setEventListeners",value:function(){var e=this;q(U(a.prototype),"setEventListeners",this).call(this),this._confirmButton.addEventListener("click",(function(t){t.preventDefault(),e._delHandler(e._currentCard,e.deleteCard),e._currentCard=null,e.closePopup()}))}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var A=document.querySelector(".popup__input_el_name"),D=document.querySelector(".popup__input_el_description"),F=document.querySelector(".profile__edit-button"),N=document.querySelector(".profile__add-button"),H=document.querySelector(".profile__avatar"),M=null,J={formElement:".popup__form",formInput:".popup__input",buttonElement:".popup__save-button",buttonElementDisabled:"popup__save-button_disabled"},z=new t(J,"[name = add-popup_form]");z.enableValidation();var $=new t(J,"[name = edit-popup_form]");$.enableValidation();var G=new t(J,"[name = avatar-popup_form]");G.enableValidation();var K=new _({profileNameSelector:".profile__name",profileDescriptionSelector:".profile__description",profileAvatarSelector:".profile__avatar"}),Q=new g("#viewer-popup");Q.setEventListeners();var W=new j({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-49",headers:{authorization:"163484ca-6b36-4c0d-b70e-87e23e1f729b","Content-Type":"application/json"}}),X=new V("#popup_confirm",(function(e,t){W.deleteCard(e).then((function(){return t()})).catch((function(e){return console.error(e)}))}));X.setEventListeners();var Y=new r(".elements"),Z=function(e){var t=new O(e,"#card",M,(function(){return t=e,Q.openPopup(t),void console.log(t._id);var t}),(function(){return X.openPopup(e,t.handleRemoveCard)}),(function(e){return W.likeCard(e).then((function(e){return t.setLikeCount(e)})).catch((function(e){return console.error(e)}))}),(function(e){return W.dislikeCard(e).then((function(e){return t.setLikeCount(e)})).catch((function(e){return console.error(e)}))})),n=t.createCard();Y.addItem(n)};W.getInitialCards().then((function(e){e.reverse().forEach((function(e){Z(e)}))})).catch((function(e){return console.error(e)}));var ee=new d("#edit-popup",(function(e){var t=e.name,n=e.description;W.setUserInfo({name:t,about:n}).then((function(e){K.setUserInfo(e),ee.closePopup()})).catch((function(e){return console.error(e)}))}));ee.setEventListeners();var te=new d("#add-popup",(function(e){var t=e.title,n=e.link;W.addCard(t,n).then((function(e){Z(e),te.closePopup()})).catch((function(e){return console.error(e)}))}));te.setEventListeners();var ne=new d("#avatar-popup",(function(e){W.setAvatar(e.avatar).then((function(){K.setUserAvatar(e.avatar),ne.closePopup()})).catch((function(e){return console.error(e)}))}));ne.setEventListeners(),F.addEventListener("click",(function(){var e=K.getUserInfo();A.value=e.name,D.value=e.description,$.resetFormValidityMessage(),$.setButtonValid(),ee.openPopup()})),N.addEventListener("click",(function(){z.resetFormValidityMessage(),z.setButtonValid(),te.openPopup()})),H.addEventListener("click",(function(){G.resetFormValidityMessage(),G.setButtonValid(),ne.openPopup()})),Promise.all([W.getUserInfo()]).then((function(e){var t,n,r=(t=e,n=1,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];M=r._id,K.setUserInfo(r),K.setUserAvatar(r.avatar)})).catch((function(e){return console.error(e)}))})();