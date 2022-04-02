export default function scrollEffects() {
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".section-nav");
    sections.forEach((section) => {
      const sectionDistanceToTop = window.pageYOffset + section.getBoundingClientRect().top;
      const screenHeight = screen.height;
      let start = window.pageYOffset;
      if (parseInt(sectionDistanceToTop) < screenHeight * 0.6 + parseInt(start)) {
        document.querySelectorAll(".nav__list a").forEach((navLink) => {
          navLink.classList.remove("active");
          document.querySelector(`#${section.id}`).classList.remove("visible");
        });
        document.querySelector(`.${section.id}`).classList.add("active");
        document.querySelector(`#${section.id}`).classList.add("visible");
      } else {
        document.querySelector(`.${section.id}`).classList.remove("active");
        document.querySelector(`#${section.id}`).classList.remove("visible");
      }
    });
  });
}
