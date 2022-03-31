import typeWriter from "./components/typewrite.js";
import { skillsArray, featuredArray, projectsArray } from "./storage/arrays.js";

document.addEventListener("DOMContentLoaded", typeWriter);

/*Scroll distance*/
(function scrollDistance() {
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".section-nav");
    sections.forEach((section) => {
      const sectionDistanceToTop = window.pageYOffset + section.getBoundingClientRect().top;
      const screenHeight = screen.height;
      let start = window.pageYOffset;
      if (parseInt(sectionDistanceToTop) < screenHeight * 0.5 + parseInt(start)) {
        document.querySelectorAll(".nav__list a").forEach((navLink) => {
          navLink.classList.remove("active");
        });
        document.querySelector(`.${section.id}`).classList.add("active");
      } else {
        document.querySelector(`.${section.id}`).classList.remove("active");
      }
    });
  });
})();

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
});

/** Sort-button **/

const btns = document.querySelectorAll(".all-projects__sort-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", sortBtn);
});

const newestBtn = document.querySelector(".sort-btn__newest");
sortProjects(newestBtn);

function sortBtn(event) {
  btns.forEach((btn) => {
    btn.classList.remove("all-projects__sort-btn--active");
  });
  const btn = event.target;
  btn.classList.add("all-projects__sort-btn--active");
  sortProjects(btn);
}

function sortProjects(btn) {
  let sortedProjects;
  if (btn.classList.contains("sort-btn__newest")) {
    sortedProjects = projectsArray.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  } else {
    sortedProjects = projectsArray.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });
  }
  displayProjects(sortedProjects);
}

function displayProjects(projects) {
  const projectsContainer = document.querySelector(".all-projects__wrapper");

  projectsContainer.innerHTML = "";

  projects.forEach((project) => {
    console.log(project.image);
    let dateFormat = { day: "numeric", month: "numeric", year: "numeric" };
    let date = new Date(project.date).toLocaleDateString("no-NO", dateFormat);
    projectsContainer.innerHTML += `
                              <div class="project" style="background-image: url('${project.image}')">
                                <a href="${project.url}">
                                  <div class="project__text">
                                    <span class="project__title">${project.title}</span>
                                    <span class="project__date">${date}</span>
                                  </div>
                                </a>
                              </div>
                              `;
  });
}
