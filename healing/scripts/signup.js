function toggleView() {
  var view = document.getElementById("domDropdown").value;
  var firstName = document.getElementsByTagName("input")[0];
  var lastName = document.getElementsByTagName("input")[1];
  var email = document.getElementsByTagName("input")[2];
  var password = document.getElementsByTagName("input")[3];
  var confirmPassword = document.getElementsByTagName("input")[4];
  var signupButton = document.getElementsByTagName("button")[0];

  if (view === "original") {
    firstName.setAttribute("type", "text");
    firstName.setAttribute("name", "firstName");
    firstName.setAttribute("id", "firstName");
    firstName.setAttribute("placeholder", "First Name");
    firstName.removeAttribute("class");

    lastName.setAttribute("type", "text");
    lastName.setAttribute("name", "lastName");
    lastName.setAttribute("id", "lastName");
    lastName.setAttribute("placeholder", "Last Name");
    lastName.removeAttribute("class");

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

    confirmPassword.setAttribute("type", "password");
    confirmPassword.setAttribute("name", "confirmPassword");
    confirmPassword.setAttribute("id", "confirmPassword");
    confirmPassword.setAttribute("placeholder", "Confirm Password");
    confirmPassword.removeAttribute("class");

    signupButton.setAttribute("type", "button");
    signupButton.setAttribute("name", "signupButton");
    signupButton.setAttribute("id", "signupButton");
    signupButton.removeAttribute("class");
    signupButton.innerHTML = "Sign Up";
  } else if (view === "modified") {
    firstName.setAttribute("type", "text");
    firstName.removeAttribute("id");
    firstName.setAttribute("name", "firstName");
    firstName.setAttribute("placeholder", "Modified First Name");
    firstName.setAttribute("class", "modified-input");

    lastName.setAttribute("type", "text");
    lastName.setAttribute("name", "lastName");
    lastName.removeAttribute("id");
    lastName.setAttribute("placeholder", "Modified Last Name");
    lastName.setAttribute("class", "modified-input");

    email.setAttribute("type", "email");
    email.setAttribute("name", "email");
    email.removeAttribute("id");
    email.setAttribute("placeholder", "Modified Email Address");
    email.setAttribute("class", "modified-input");

    password.setAttribute("type", "password");
    password.setAttribute("name", "password");
    password.removeAttribute("id");
    password.setAttribute("placeholder", "Modified Password");
    password.setAttribute("class", "modified-input");

    confirmPassword.setAttribute("type", "password");
    confirmPassword.setAttribute("name", "confirmPassword");
    confirmPassword.removeAttribute("id");
    confirmPassword.setAttribute("placeholder", "Modified Confirm Password");
    confirmPassword.setAttribute("class", "modified-input");

    signupButton.setAttribute("type", "button");
    signupButton.setAttribute("name", "signupButton");
    signupButton.removeAttribute("id");
    signupButton.setAttribute("class", "modified-button");
    signupButton.innerHTML = "Sign Up";
  } else if (view === "ai") {
    firstName.removeAttribute("id");
    firstName.removeAttribute("type");
    firstName.setAttribute("name", "ai_firstName");
    firstName.removeAttribute("placeholder");
    firstName.removeAttribute("class");

    lastName.removeAttribute("id");
    lastName.removeAttribute("type");
    lastName.setAttribute("name", "ai_lastName");
    lastName.removeAttribute("placeholder");
    lastName.removeAttribute("class");

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

    confirmPassword.removeAttribute("id");
    confirmPassword.removeAttribute("type");
    confirmPassword.setAttribute("name", "ai_confirmPassword");
    confirmPassword.removeAttribute("placeholder");
    confirmPassword.removeAttribute("class");

    signupButton.removeAttribute("id");
    signupButton.removeAttribute("type");
    signupButton.setAttribute("name", "ai_signupButton");
    signupButton.removeAttribute("class");
    signupButton.innerHTML = "AI Healing Signup";
  }
}
