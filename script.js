// 🌙 Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // অপশনাল: বাটনের emoji পরিবর্তন
    if (document.body.classList.contains("dark-mode")) {
      themeToggle.textContent = "☀️ Light Mode";
    } else {
      themeToggle.textContent = "🌙 Dark Mode";
    }
  });
}

// ✨ Scroll Fade-In Animation
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -20px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});