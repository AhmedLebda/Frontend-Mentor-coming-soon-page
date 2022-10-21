const form = document.querySelector(".subscribe");
const email = document.querySelector("#email");
const btn = document.querySelector("button");

form.addEventListener("submit", (e) => {
  if (!emailValidation(email.value)) {
    e.preventDefault();
    error();
    email.classList.add("error");
  } else {
    email.classList.remove("error");
    document.querySelector(".error-message").remove();
  }
});

// Email Validation Function
function emailValidation(email) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return email.match(mailformat);
}

function error() {
  if (email.classList.contains("error")) {
    return false;
  }
  const message = document.createElement("p");
  message.innerText = "Please provide a valid email address";
  message.classList.add("error-message");
  window.innerWidth >= 800
    ? form.appendChild(message)
    : form.insertBefore(message, btn);
}
