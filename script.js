// Highlight active navbar link
const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Contact form demo
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent successfully!");
});