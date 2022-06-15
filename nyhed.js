const processForm = (form) => {
  const data = new formData(form);
  data.append("form-name", "newsletter");
  fetch("/", {
    method: "POST",
    body: data,
  })
    .then(() => {
      form.innerHTML = `<div class="form--success">Tak for din e-mail! Check din indbakke for en bekraeftelsesmail.</div`;
    })
    .catch((error) => {
      form.innerHTML = `<div class="form--error">Error: ${error}</div>`;
    });
};

const emailForm = document.querySelector(".email-form");
if (emailForm) {
  emailForm.addEventListener("submit", (e) => {
    e.preventDefault();
    processForm(emailForm);
  });
}
