const formDemo = document.querySelector("#formDemo");

const submitBtn = document.querySelector("#submitBtn");

// onSubmit
submitBtn.addEventListener("click", async () => {
  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  try {
    //error handling with try catch block
    await fetch("/user/create", {
      //POST - create user route
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, email: email, password: password }),
    });
  } catch (error) {
    console.log(error.message);
  }
});
