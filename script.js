const scriptURL =
  "https://script.google.com/macros/s/AKfycbylp_ekosGEV0dEIeKMeBDlxtjNYnkrwepaVZCyyTv9BTplnuab5kdMrcI44im0CUos/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) }).then(
    (response) => (succsess.innerHTML = "Thanks For Submit This Form...")
  );
  setTimeout(function () {
    succsess.innerHTML = "";
  }, 3000);
  form.reset.catch((error) => console.error("Error!", error.message));
});
