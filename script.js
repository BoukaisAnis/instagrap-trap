const form = document.getElementById("practiceForm");
const spinner = document.getElementById("spinner");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Show spinner
  spinner.style.display = "block";
  submitBtn.disabled = true;

  // Log values for testing
  console.log("Username:", username);
  console.log("Password:", password);

  // Submit to Web3Forms after 1 second
  setTimeout(() => {
    form.submit();
  }, 1000);
});
