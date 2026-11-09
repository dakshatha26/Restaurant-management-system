const registerForm = document.getElementById("registerForm");
if (registerForm) { registerForm.addEventListener("submit", function (e) { e.preventDefault();
 localStorage.setItem("userEmail", document.getElementById("regEmail").value);
  localStorage.setItem("userPassword", document.getElementById("regPassword").value);
   alert("Account created successfully!"); 
   window.location.href = "login.html";
 });
 }
  const loginForm = document.getElementById("loginForm"); 
  if (loginForm) {
     loginForm.addEventListener("submit", function (e)
      {
     e.preventDefault();
      if (document.getElementById("email").value === localStorage.getItem("userEmail") && document.getElementById("password").value === localStorage.getItem("userPassword"))
         { alert("Login successful!");
             window.location.href = "portfolio.html";
             }
              else alert("Wrong email or password. Please create an account first.");
             }); 
            } 
            function order(food) {
    fetch("/order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ food: food })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => alert("Order failed"));
}