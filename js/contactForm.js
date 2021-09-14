let formContact = document.querySelector("#formContact");

let templateRegisterSuccess = `
    <h2>Gracias por registrarte</h2>
    <div class="success-checkmark">
    <div class="check-icon">
    <span class="icon-line line-tip"></span>
    <span class="icon-line line-long"></span>
    <div class="icon-circle"></div>
    <div class="icon-fix"></div>
    </div>
    </div>
`;

formContact.addEventListener("submit", (e) => {
  e.preventDefault();
  let $name = document.querySelector("#name").value;
  let $email = document.querySelector("#email").value;
  let $address = document.querySelector("#address").value;
  let $password = document.querySelector("#password").value;
  let $buyContainer = document.querySelector("#error__form");
  let $contactForm = document.querySelector("#contact__form");
  $buyContainer.innerHTML = "";
  if (
    !$name.trim() ||
    !$email.trim() ||
    !$address.trim() ||
    !$password.trim()
  ) {
    $buyContainer.innerHTML += `
    <div class="buy__error">
      <p>Todos los campos son obligatorios</p>
    </div>
  `;
  } else {
    $contactForm.innerHTML = templateRegisterSuccess;
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  }
});
