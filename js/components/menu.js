export function navMenu() {
  const nav = document.querySelector("header");
  const menuBar = document.querySelector(".fa-bars");
  const menuLinks = document.querySelector(".menu__dropdown");
  const logo = document.querySelector(".logo");

  logo.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });

  window.addEventListener("click", function (event) {
    if (event.target.classList.contains("fa-bars") && !event.target.classList.contains("active")) {
      menuLinks.style.display = "block";
      menuBar.classList.add("active");
    } else {
      menuLinks.style.display = "none";
      menuBar.classList.remove("active");
    }
  });

  let prevScrollPos = window.pageYOffset;
  window.addEventListener("scroll", function () {
    if (screen.width <= 600) {
      menuLinks.style.display = "none";
      menuBar.classList.remove("active");

      let currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        nav.style.top = "0px";
      } else {
        nav.style.top = "-100px";
      }
      prevScrollPos = currentScrollPos;
    }
  });
}
