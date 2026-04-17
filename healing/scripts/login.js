function toggleView() {
  var view = document.getElementById("domDropdown").value;
  var email = document.getElementsByTagName("input")[0];
  var password = document.getElementsByTagName("input")[1];
  var loginButton = document.getElementsByTagName("button")[0];

  if (view === "original") {
    email.setAttribute("type", "email");
    email.setAttribute("name", "email");
    email.setAttribute("id", "email");
    email.setAttribute("placeholder", "Email Address");
    email.removeAttribute("class");

    password.setAttribute("type", "password");
    password.setAttribute("name", "password");
    password.setAttribute("id", "password");
    password.setAttribute("placeholder", "Password");
    password.removeAttribute("class");

    loginButton.setAttribute("type", "button");
    loginButton.setAttribute("name", "loginButton");
    loginButton.setAttribute("id", "loginButton");
    loginButton.removeAttribute("class");
    loginButton.innerHTML = "Log In";
  } else if (view === "modified") {
    email.setAttribute("type", "email");
    email.removeAttribute("id");
    email.setAttribute("name", "email");
    email.setAttribute("placeholder", "Modified Email Address");
    email.setAttribute("class", "modified-input");

    password.setAttribute("type", "password");
    password.setAttribute("name", "password");
    password.removeAttribute("id");
    password.setAttribute("placeholder", "Modified Password");
    password.setAttribute("class", "modified-input");

    loginButton.setAttribute("type", "button");
    loginButton.setAttribute("name", "loginButton");
    loginButton.removeAttribute("id");
    loginButton.setAttribute("class", "modified-button");
    loginButton.innerHTML = "Log In";
  } else if (view === "ai") {
    email.removeAttribute("id");
    email.removeAttribute("type");
    email.setAttribute("name", "ai_email");
    email.removeAttribute("placeholder");
    email.removeAttribute("class");

    password.removeAttribute("id");
    password.removeAttribute("type");
    password.setAttribute("name", "ai_password");
    password.removeAttribute("placeholder");
    password.removeAttribute("class");

    loginButton.removeAttribute("id");
    loginButton.removeAttribute("type");
    loginButton.setAttribute("name", "ai_loginButton");
    loginButton.removeAttribute("class");
    loginButton.innerHTML = "AI Healing Log In";
  }
}
