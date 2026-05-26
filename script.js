window.addEventListener("DOMContentLoaded", () => {
  // Setup the greeting
  const greetingEl = document.getElementById("greeting");
  if (greetingEl) {
    const hour = new Date().getHours();
    let greet = "Hey";
    if (hour < 12) greet = "Good Morning";
    else if (hour < 18) greet = "Good Afternoon";
    else greet = "Good Evening";
    greetingEl.textContent = `${greet}, I'm Sameer 👋`;
  }

  // Handle the contact form submission safely
  const formEl = document.getElementById("contact-form");
  if (formEl) {
    formEl.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thanks for your message!");
      this.reset();
    });
  }
});