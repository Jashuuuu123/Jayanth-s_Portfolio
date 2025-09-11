// Intro Fade
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  setTimeout(() => {
    intro.style.display = "none";
  }, 4000);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll Top
const scrollTopBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
  scrollTopBtn.classList.toggle("show", window.scrollY > 300);
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Section Reveal
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});
