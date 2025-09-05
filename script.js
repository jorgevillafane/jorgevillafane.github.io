// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Simple welcome animation
window.addEventListener("load", () => {
  document.querySelector(".hero-text").style.opacity = 1;
  document.querySelector(".hero-text").style.transform = "translateY(0)";
});

