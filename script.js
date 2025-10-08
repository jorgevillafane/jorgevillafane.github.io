<<<<<<< HEAD
// Sidebar navigation with smooth section switching
const links = document.querySelectorAll(".sidebar a");
const sections = document.querySelectorAll(".section");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    // Remove active classes
    links.forEach(l => l.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    // Add active to clicked link & section
    link.classList.add("active");
    const target = document.getElementById(link.dataset.section);
    target.classList.add("active");
  });
});


=======
// Sidebar navigation with smooth section switching
const links = document.querySelectorAll(".sidebar a");
const sections = document.querySelectorAll(".section");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    // Remove active classes
    links.forEach(l => l.classList.remove("active"));
    sections.forEach(s => s.classList.remove("active"));

    // Add active to clicked link & section
    link.classList.add("active");
    const target = document.getElementById(link.dataset.section);
    target.classList.add("active");
  });
});


>>>>>>> ac72d012c296b6bc3e74d72d7173d76a5189cf54
