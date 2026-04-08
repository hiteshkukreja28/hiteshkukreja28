document.getElementById("year").textContent = new Date().getFullYear();

const roles = [
  "Passionate Developer",
  "Web Developer",
  "Tech Learner",
  "Innovative Creator"
];

const rotatingText = document.getElementById("rotating-text");
let index = 0;

setInterval(() => {
  rotatingText.style.animation = "none";
  void rotatingText.offsetWidth;

  index = (index + 1) % roles.length;
  rotatingText.textContent = roles[index];

  rotatingText.style.animation = "fadeText 2s ease-in-out";
}, 2000)