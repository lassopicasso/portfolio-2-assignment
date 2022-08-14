import typeWriter from "./components/typewrite.js";
import { skillsArray, featuredArray, projectsArray } from "./storage/arrays.js";
import { navMenu } from "./components/menu.js";
import scrollEffects from "./components/scroll.js";
import { displaySkills, displayFeatured, displayProjects } from "./components/createhtml.js";

navMenu();
scrollEffects();
document.addEventListener("DOMContentLoaded", typeWriter);

/*Skills*/

const navSkills = document.querySelectorAll(".skills__nav-link");
const skillsContent = document.querySelector(".skills__content");

skillsArray.forEach((skill) => {
  if (skill.title === "JavaScript") {
    displaySkills(skill.title, skill.text, skill.keyword);
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
      displaySkills(object.title, object.text, object.keyword);
    }
  });
}

/*Projects*/

/** Projects - Featured **/

featuredArray.forEach((project) => {
  const featuredProjects = document.querySelector(".featured__projects");
  displayFeatured(featuredProjects, project);
});

/** Sort-button **/

const btns = document.querySelectorAll(".all-projects__sort-btn");
const filtersJS = document.querySelectorAll(".filter-js");
const filtersCSS = document.querySelectorAll(".filter-css");

let filteredJS = "all";
let filteredCSS = "all";

filtersJS.forEach((filter) => {
  filter.addEventListener("change", (event) => {
    filteredJS = event.target.value;
    sortProjects();
  });
});
filtersCSS.forEach((filter) => {
  filter.addEventListener("change", (event) => {
    filteredCSS = event.target.value;
    sortProjects();
  });
});

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
  sortProjects();
}

function sortProjects() {
  let sortedProjects;
  btns.forEach((btn) => {
    if (btn.classList.contains("all-projects__sort-btn--active")) {
      if (btn.classList.contains("sort-btn__newest")) {
        sortedProjects = projectsArray.sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        });
      } else {
        sortedProjects = projectsArray.sort(function (a, b) {
          return new Date(a.date) - new Date(b.date);
        });
      }
    }
  });

  let filteredProjects = sortedProjects.filter((project) => {
    return (project.css.toLowerCase() === filteredCSS || filteredCSS === "all") && (project.javascript.toLowerCase() === filteredJS || filteredJS === "all");
  });
  createProjects(filteredProjects);
}

function createProjects(projects) {
  const projectsContainer = document.querySelector(".all-projects__wrapper");
  projectsContainer.innerHTML = "";
  projects.forEach((project) => {
    displayProjects(projectsContainer, project);
  });
}
