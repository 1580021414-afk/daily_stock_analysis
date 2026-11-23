// 年份自动更新
document.getElementById("year").textContent = new Date().getFullYear();

// 滚动进入视野时渐显
const revealTargets = document.querySelectorAll(
  ".section-head, .about-lead, .about-body, .card, .skill-group, .contact-card"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("in"));
}

// 顶部导航滚动时增强背景
const nav = document.querySelector(".nav");
window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 24) {
      nav.style.background = "rgba(11, 11, 15, 0.85)";
    } else {
      nav.style.background = "rgba(11, 11, 15, 0.62)";
    }
  },
  { passive: true }
);
