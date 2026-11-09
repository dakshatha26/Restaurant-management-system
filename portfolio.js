// JavaScript for the Restaurant Management System home page
console.log("Tasty Bites Restaurant website loaded");
document.addEventListener("DOMContentLoaded", function () 
{ 
    const msg = document.querySelector(".hero h2");
     if (msg) { msg.addEventListener("click", function () 
        {
    alert("Welcome to Tasty Bites Restaurant!");
   });
    }
 });