
// const form = document.querySelector(`.feedback-form`)
// const input = document.querySelector(`input`)
// const textarea = document.querySelector(`textarea`)
// const button = document.querySelector(`button`)


////////1

// let localStorageObj;;
// let currentTextStorage;
// let formTextContObj;
// let parc;
// currentTextarea()
// form.addEventListener(`input`, function form(e) {
//    const {
//     elements: { email, message }
//    } = e.currentTarget;
//   formTextContObj = {email: email.value, message: message.value}
//   currentStorageJSON  = JSON.stringify(formTextContObj)
//   let local = localStorage.setItem("feedback-form-state", currentStorageJSON)
//   return local
// })

// function currentTextarea() {
//  const savedSettings = localStorage.getItem("feedback-form-state");
//   parc = currentTextStorage = JSON.parse(savedSettings);
//   if (savedSettings) {
//     textarea.value = parc.message
//   }
//   if (savedSettings) {
//     input.value = parc.email
//   }
// }

// button.addEventListener(`submit`, submitButton)
// function submitButton(e) {
// console.log(`click`)

// }

// function textArea() {
//  textarea.value = currentTextStorage.message
// }


// input.addEventListener(`input`, inputANDtextarea)
// textarea.addEventListener(`input`, textArea)

  


/////////////2


var throttle = require('lodash.throttle');
const refs = {
  form: document.querySelector(`.feedback-form`),
  input: document.querySelector(`input`),
  textarea: document.querySelector(`textarea`),
};

refs.form.addEventListener(`submit`, throttle(formSubm,500))
refs.textarea.addEventListener(`input`, throttle(TeaxareaSave, 500))
refs.input.addEventListener(`input`, throttle(inputEmail,500))

currentTextarea()
function formSubm(e) {
  e.preventDefault()
  localStorage.clear()
  let consoleMessage = { name: message, email: messageInput};

  if (consoleMessage.name === `` || consoleMessage.email === ``) {
    return 
  }else {
    e.target.reset()
    console.log(consoleMessage)
  }
}

let message = ``;
let messageInput = ``;
function TeaxareaSave(evt) {

  message = evt.target.value
  localStorage.setItem("feedback-form-state", message)
}
function currentTextarea() {
  
  const saveMessage = localStorage.getItem("feedback-form-state")
  if (saveMessage) {
    refs.textarea.value = saveMessage
  }
  const saveEmail = localStorage.getItem("feedback-form-input")
  if (saveEmail) {
    refs.input.value = saveEmail
  }
}
function inputEmail(evt) {

  messageInput = evt.target.value
  localStorage.setItem("feedback-form-input", messageInput)
}

