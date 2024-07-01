const formDemo = document.querySelector("#formDemo");

const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", async () => {
  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  await fetch("/user/create", {
    method: "POST",
    body: JSON.stringify({ username: username, email: email, password: password }),
  });
});
