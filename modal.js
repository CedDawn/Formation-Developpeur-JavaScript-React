// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
const formSubmit = document.querySelectorAll(".btn-submit");
const closeBtn = document.querySelectorAll(".closebtn");
const form = document.querySelector("#form");
const confirmmsg = document.querySelector(".confirm");
const errormsg = document.querySelectorAll(".error");
const allInputs = document.querySelectorAll(".text-control");

// Launch Modal Event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Launch Modal Form
function launchModal() {
  modalbg.style.display = "block";
  console.log(errormsg)
  errormsg.forEach((elt) => elt.style.display = "none");
  allInputs.forEach((elt) => elt.classList.remove("inputerror"));
}


// Close Modal Event
modalClose.forEach((cross) => cross.addEventListener("click", closeModal));
closeBtn.forEach((btn) => btn.addEventListener("click", closeConfirmModal));

// Close Form
function closeModal() {
  modalbg.style.display = "none";
  form.style.display = "block";
  confirmmsg.style.display = "none";
}

function closeConfirmModal() {
  modalbg.style.display = "none";
  form.reset();
  confirmmsg.style.display = "none";
  form.style.display = "block";
}


// Submit Form
formSubmit.forEach((submit) => submit.addEventListener("click", submitForm));

// Submit Event
function submitForm(event) {
  event.preventDefault();

  // Variable
  const errors = [];

  // Conditions
  validElement(
    "#first",
    "#errorprenom",
    element => element.value.length > 2,
    errors
  );

  validElement(
    "#last",
    "#errornom",
    element => element.value.length > 2,
    errors
  );

  validElement(
    "#email",
    "#errormail",
    element => element.value.length !== 0 && isMail(element.value),
    errors
  );

  validElement(
    "#birthdate",
    "#errorbirth",
    element => element.value.length > 0 && isValidDate(element.value),
    errors
  );

  validElement(
    "#quantity",
    "#errorquantity",
    element => element.value.length > 0,
    errors
  );

  validElement(
    "[name=location]:checked",
    "#errorcity",
    element => !!element,
    errors
  );

  validElement(
    "#checkbox1",
    "#errorcu",
    element => element.checked,
    errors
  );

  if (errors.length === 0) {
    form.style.display = "none";
    confirmmsg.style.display = "flex";
  }
}


// Functions
function isMail(value) {
  let trueMail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/
  return trueMail.exec(value)
}

function isValidDate(value) {
  return new Date(value) <= new Date()
}

function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function validElement(id, idError, checkCallback, errors) {
  const item = document.querySelector(id);
  const itemError = document.querySelector(idError);
  const isValid = checkCallback(item);
  itemError.style.display = isValid ? "none" : "block";
  if (item) {
    if (!isValid) {
      item.classList.add("inputerror");
      errors.push(idError);
    } else {
      item.classList.remove("inputerror");
    }
  } else {
    errors.push(idError);
  }
}