export default function typeWriter() {
  const about = `<a href="#about">about me</a>`;
  const projects = `<a href="#projects">my projects</a>`;
  var i = 0;
  var txt = `Hi! I'm Lars Walderhaug and Front End Developer. Here you can get to know ?${about} and +${projects}.`;

  var speed = 70;
  let welcomeMessage = document.querySelector(".welcome__typewriter p");
  function typeWriter() {
    if (i < txt.length) {
      if (i === 3) {
        textChecker();
        setTimeout(typeWriter, 800);
      } else if (i < 48) {
        textChecker();
        setTimeout(typeWriter, speed);
      } else if (i === 48) {
        textChecker();
        setTimeout(typeWriter, 800);
      } else {
        textChecker();
        setTimeout(typeWriter, speed);
      }

      function textChecker() {
        if (txt.charAt(i) === "?") {
          welcomeMessage.innerHTML += `${about}`;
          i = i + about.length + 1;
        } else if (txt.charAt(i) === "+") {
          welcomeMessage.innerHTML += `${projects}`;
          i = i + projects.length + 1;
        } else {
          welcomeMessage.innerHTML += txt.charAt(i);
          i++;
        }
      }
    }
  }
  typeWriter();
}
