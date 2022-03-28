import typeWriter from "./components/typewrite.js";
import { skillsArray, featuredArray } from "./storage/arrays.js";

document.addEventListener("DOMContentLoaded", typeWriter);

/*Scroll distance*/
let scrollDistance = function (callback, refresh) {
  // Make sure a valid callback was provided
  //   if (!callback || typeof callback !== "function") return;

  // Variables
  var isScrolling, start, end, distance;

  // Listen for scroll events
  //   window.onscroll
  window.addEventListener("scroll", function (event) {
    // Set starting position
    start = window.pageYOffset;
    if (750 < start) {
      document.querySelector(".nav__link-1").style.color = "#ff9100";
    }
    if (start > 1550 || start < 750) {
      document.querySelector(".nav__link-1").style.color = "#02fefe";
    }
    if (1700 < start) {
      document.querySelector(".nav__link-2").style.color = "#ff9100";
    } else {
      document.querySelector(".nav__link-2").style.color = "#02fefe";
    }
    if (2250 < start) {
      document.querySelector(".nav__link-3").style.color = "#ff9100";
    } else {
      document.querySelector(".nav__link-3").style.color = "#02fefe";
    }
  });
};
scrollDistance();

/*Skills*/

/** Skills - Nav **/

const navSkills = document.querySelectorAll(".skills__nav-link");
const skillsContent = document.querySelector(".skills__content");

skillsArray.forEach((skill) => {
  if (skill.title === "JavaScript") {
    createHTML(skill.title, skill.text, skill.keyword);
  }
});

navSkills.forEach((navLink) => {
  navLink.addEventListener("click", skill);
});

function skill(event) {
  navSkills.forEach((link) => {
    if (link.classList.contains("skills__nav-link--active")) {
      link.classList.remove("skills__nav-link--active");
    }
  });
  event.target.classList.add("skills__nav-link--active");

  let skillInFocus = event.target.dataset.title;
  skillsContent.innerHTML = "";
  skillsArray.forEach((object) => {
    if (skillInFocus === object.title) {
      createHTML(object.title, object.text, object.keyword);
    }
  });
}

function createHTML(title, description, keywords) {
  skillsContent.innerHTML = ` <div>
                                <h3>${title}</h3>
                                <p>${description}</p>
                              </div>
                              <div>
                                <ul class="keywords-wrapper"></ul>
                              </div>`;
  const keywordsWrapper = document.querySelector(".keywords-wrapper");
  keywords.forEach((keyword) => {
    keywordsWrapper.innerHTML += `<li>${keyword}</li>`;
  });
}

/*Projects*/

/** Projects - Featured **/

featuredArray.forEach((project) => {
  const featuredProjects = document.querySelector(".featured__projects");
  featuredProjects.innerHTML += `
                                <div class="featured__project">
                                  <div class="featured__image-wrapper">  
                                    <div class="featured__image featured__image-${project.id}"><a href="${project.url}"></a></div>
                                  </div>
                                  <div class="featured__description">
                                    <h4> ${project.title} </h4>
                                    <p> ${project.text} </p>
                                  </div>
                                </div>
                                `;
  console.log(document.querySelector(`.featured__image-${project.id}`));
  document.querySelector(`.featured__image-${project.id}`).style.backgroundImage = `url("${project.image}")`;
  console.log(project.title);
  console.log(project.image);
  console.log(project.text);
});
