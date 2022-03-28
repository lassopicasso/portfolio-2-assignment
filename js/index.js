import typeWriter from "./components/typewrite.js";
import { skillsArray } from "./storage/arrays.js";

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

// for (let i = 0; i < skillsArray.length; )

const navSkills = document.querySelectorAll(".skills__nav-link");
const skillsContent = document.querySelector(".skills__content");
navSkills.forEach((navLink) => {
  console.log(navLink.dataset.title);
  navLink.addEventListener("click", skill);
});

function skill(event) {
  let skillInFocus = event.target.dataset.title;
  skillsContent.innerHTML = "";
  skillsArray.forEach((object) => {
    if (skillInFocus === object.title) {
      createHTML(object.title, object.text, object.keyword);
    }
  });
}

function createHTML(title, description, keywords) {
  skillsContent.innerHTML = `<h3>${title}</h3>
                            <p>${description}</p>
                            <ul class="keywords-wrapper"></ul>`;
  const keywordsWrapper = document.querySelector(".keywords-wrapper");
  keywords.forEach((keyword) => {
    keywordsWrapper.innerHTML += `<li>${keyword}</li>`;
  });
}
