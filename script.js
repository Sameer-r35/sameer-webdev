window.addEventListener("DOMContentLoaded", () => {
  const greetingEl = document.getElementById("greeting");
  const hour = new Date().getHours();
  let greet = "Hey";
  if (hour < 12) greet = "Good Morning";
  else if (hour < 18) greet = "Good Afternoon";
  else greet = "Good Evening";
  greetingEl.textContent = `${greet}, I'm Sameer`;
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for your message!");
  this.reset();
});
