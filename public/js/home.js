console.log("Hello from app");
const formContainer = document.getElementById("form-home");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
let register = false;

window.addEventListener("DOMContentLoaded", () => {
  // Appelle updateForm() au chargement de la page pour afficher le formulaire de connexion
  updateForm(register);
});

formContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("register-link")) {
    e.preventDefault();
    register = !register;
    console.log(register);
    updateForm(register);
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = e.target.elements.username.value;
  const password = e.target.elements.password.value;
  const user = {
    username: username,
    password: password,
  };
  console.log(user);
});

function updateForm(register) {
  formContainer.innerHTML = "";

  if (!register) {
    // Si register est false, affiche le formulaire de connexion
    formContainer.innerHTML = `
      <h1>Connexion</h1>
      <form action="/api/auth/login" method="POST" class="flex" id="login-form">
        <input type="text" placeholder="Username" name="username" />
        <input type="text" placeholder="Email" name="email" />
        <button type="submit" class="btn btn-primary">Connexion</button>
        <button type="button" class="btn btn-secondary register-link" id="register-link">S'inscrire</button>
      </form>
    `;
  } else {
    // Sinon, affiche le formulaire d'inscription
    formContainer.innerHTML = `
      <h1>Inscription</h1>
      <form class="flex" id="register-form">
        <input type="text" placeholder="Nom" name="nom" />
        <input type="text" placeholder="Prénom" name="prenom" />
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Mot de passe" name="password" />
        <button type="submit" class="btn btn-primary">Inscription</button>
        <button type="button" class="btn btn-secondary register-link" id="register-link">Se connecter</button>
      </form>
    `;
  }
}
