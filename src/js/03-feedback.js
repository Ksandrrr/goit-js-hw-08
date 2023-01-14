
var throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector(`.feedback-form`),
  input: document.querySelector(`input`),
  textarea: document.querySelector(`textarea`),
  button: document.querySelector(`button`)
};

refs.form.addEventListener(`input`, throttle(form, 500))
refs.button.addEventListener(`click`, submitForm)


let messageStorage = {};
function form(e) {
  messageStorage[e.target.name]= e.target.value
  messageStorage[e.target.name] = e.target.value
  localStorage.setItem("feedback-form-state", JSON.stringify(messageStorage))
  
}
currentLocal()


function currentLocal() {
  const saveMesValue = localStorage.getItem("feedback-form-state")
  const parsMesValue = JSON.parse(saveMesValue)
  
  if (parsMesValue && parsMesValue.email) {
    refs.input.value = parsMesValue.email
    
    messageStorage = parsMesValue
  } 
  if (parsMesValue && parsMesValue.message) {
    refs.textarea.value = parsMesValue.message
    messageStorage = parsMesValue
  }
}
function submitForm(e) {

  e.preventDefault()
  refs.input.value = ``
  refs.textarea.value = ``
  localStorage.clear()
  console.log(messageStorage)
  messageStorage = {}
 
}
