
var throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector(`.feedback-form`),
  input: document.querySelector(`input`),
  textarea: document.querySelector(`textarea`),
};

refs.form.addEventListener(`submit`, throttle(formSubm,500))
refs.textarea.addEventListener(`input`, throttle(TeaxareaSave, 500))
refs.input.addEventListener(`input`, throttle(inputEmail,500))



let messageStorage = {};
let saveMessage
let messageObj;

function formSubm(e) {
    e.preventDefault()
    console.log(messageStorage)
    e.currentTarget.reset()
    localStorage.clear()
    messageStorage = {}

}
function TeaxareaSave(evt) {
  localStorage.setItem("feedback-form-state", JSON.stringify(messageStorage))
 saveMessage = localStorage.getItem("feedback-form-state")
 messageObj = JSON.parse(saveMessage)
  messageStorage.message = evt.target.value
  if (evt.target.value === ``) {
    evt.target.value = ``
  }

}
function inputEmail(evt) {
  localStorage.setItem("feedback-form-state", JSON.stringify(messageStorage))
  saveMessage = localStorage.getItem("feedback-form-state")
  messageObj = JSON.parse(saveMessage)
  messageStorage.email = evt.target.value
if (evt.target.value === ``) {
    evt.target.value = ``
  }
}
currentTextarea()
function currentTextarea() {
 const saveMesValue = localStorage.getItem("feedback-form-state")
 const parsMesValue = JSON.parse(saveMesValue)
  if (parsMesValue) {
    refs.input.value = parsMesValue.email
    messageStorage.email = parsMesValue.email
  } 
  

  if (parsMesValue) {
    refs.textarea.value = parsMesValue.message
    messageStorage.message = parsMesValue.message
  }
 
}


