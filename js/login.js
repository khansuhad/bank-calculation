document.getElementById("login-button").addEventListener("click", function () {
  const email = document.getElementById("email-input");
  const password = document.getElementById("password-input");
  const emailValue = email.value;
  const passwordValue = password.value;

  if (
    emailValue === "suhadahmodkhan@gmail.com" &&
    passwordValue === "suhad1234"
  ) {
    window.location.href = 'bank.html';
  }
  else if (
    emailValue === "suhadahmodkhan@gmail.com" &&
    passwordValue !== "suhad1234"
  ) {
    alert("Your password is incorrect ,please provide a valid password");
    password.value = "";
    return;
  }
  else if (
    emailValue !== "suhadahmodkhan@gmail.com" ||
    passwordValue !== "suhad1234"
  ) {
    alert("Your email or password is incorrect ,please provide a valid email or password");
  }
  email.value = "";
  password.value = "";


});
