export function displaySkills(title, description, keywords) {
  const skillsContent = document.querySelector(".skills__content");
  skillsContent.innerHTML = ` <div>
                                      <h3>${title}</h3>
                                      <p>${description}</p>
                                    </div>
                                    <div>
                                      <span class="keywords"> Keywords </span>
                                      <ul class="keywords-wrapper"></ul>
                                    </div>`;
  const keywordsWrapper = document.querySelector(".keywords-wrapper");
  keywords.forEach((keyword) => {
    keywordsWrapper.innerHTML += `<li>${keyword}</li>`;
  });
}

export function displayFeatured(featuredContainer, project) {
  featuredContainer.innerHTML += `
                                      <div class="featured__project">
                                        <div class="featured__image-wrapper">  
                                          <div class="featured__image featured__image-${project.id}"><a href="${project.url}"></a></div>
                                        </div>
                                        <div class="featured__description">
                                          <h3> ${project.title} </h3>
                                          <p> ${project.text} </p>
                                        </div>
                                      </div>
                                      `;
  document.querySelector(`.featured__image-${project.id}`).style.backgroundImage = `url("${project.image}")`;
}

export function displayProjects(projectsContainer, project) {
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
}
