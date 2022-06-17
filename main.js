const menu = document.querySelector(".menu-icon");
const overlay = document.querySelector(".overlay");

const closeButton = document.querySelector(".close-button");
const overlayLinkOne = document.querySelector(".overlay-link-one");
const overlayLinkTwo = document.querySelector(".overlay-link-two");
const overlayLinkThree = document.querySelector(".overlay-link-three");
const desktopWorkSection = document.getElementById("desktop-works");
const mobileWorkSection = document.getElementById("mobile-portfolio");

menu.addEventListener("click", () => {
  overlay.style.display = "block";
});

closeButton.addEventListener("click", () => {
  overlay.style.display = "none";
});

overlayLinkOne.addEventListener("click", () => {
  overlay.style.display = "none";
});

overlayLinkTwo.addEventListener("click", () => {
  overlay.style.display = "none";
});

overlayLinkThree.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Portfolio projects in an array
const projects = [
  {
    id: 1,
    name: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    featured_img: "./images/desktop-works/work-one.png",
    tecnologies: ["html", "css", "javascript"],
    live_link: "https://alphayowakarindi.github.io/My-Portfolio-1/",
    source_link: "https://github.com/alphayowakarindi/My-Portfolio-1",
  },
  {
    id: 2,
    name: "Multi-Post Stories",
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    featured_img: "./images/desktop-works/work-two.png",
    tecnologies: ["html", "Ruby on rails", "css", "javascript"],
    live_link: "https://alphayowakarindi.github.io/My-Portfolio-2/",
    source_link: "https://github.com/alphayowakarindi/My-Portfolio-2",
  },
  {
    id: 3,
    name: "Facebook 360",
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    featured_img: "./images/desktop-works/work-three.png",
    tecnologies: ["html", "Ruby on rails", "css", "javascript"],
    live_link: "https://alphayowakarindi.github.io/My-Portfolio-3/",
    source_link: "https://github.com/alphayowakarindi/My-Portfolio-3",
  },
  {
    id: 4,
    name: "Uber Navigation",
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    featured_img: "./images/desktop-works/work-four.png",
    tecnologies: ["html", "Ruby on rails", "css", "javascript"],
    live_link: "https://alphayowakarindi.github.io/My-Portfolio-4/",
    source_link: "https://github.com/alphayowakarindi/My-Portfolio-4",
  },
];

// Populating the DOM on desktop version with html for portfolio section
window.addEventListener("DOMContentLoaded", () => {
  let projectsInHtmlVersion = "";
  for (let i = 0; i < projects.length; i++) {
    projectsInHtmlVersion += ` <div class="work">
                  <div class="left-content">
                    <img src="${projects[i].featured_img}" alt="" />
                  </div>
                  <div class="right-content">
                    <h3>${projects[i].name}</h3>
                    <div class="role">
                      <span>Canopy</span> <img src="images/works/counter.svg" alt="" />
                      <span class="skill">Back End Dev</span>
                      <img src="images/works/counter.svg" alt="" />
                      <span class="year">2015</span>
                    </div>
                    <p class="task">
                    ${projects[i].description}
                    </p>
                    <ul>
                      ${projects[i].tecnologies
                        .map((tech) => `<li>${tech}</li>`)
                        .join("")}
                    </ul>
                    <button class='pop-desktop-modal-btn' type="submit"  data-id=${
                      projects[i].id
                    }>See Project</button>
                  </div>
                </div>`;
  }
  return (desktopWorkSection.innerHTML = projectsInHtmlVersion);
});

// Populating DOM on mobile version with html for portfolio section
window.addEventListener("DOMContentLoaded", () => {
  let projectsInHtmlVersion = "";
  for (let i = 0; i < projects.length; i++) {
    projectsInHtmlVersion += `   <div class="work">
    <img src="${projects[i].featured_img}" alt="" />
    <h3>${projects[i].name}</h3>
    <div class="role" id="works">
      <span>Canopy</span> <img src="images/works/counter.svg" alt="" />
      <span class="skill">Back End Dev</span>
      <img class="roleimg" src="images/works/counter.svg" alt="" />
      <span class="year">2015</span>
    </div>
    <p class="task">
      A daily selection of privately personalized reads; no accounts or
      sign-ups required.
    </p>
    <ul>
    ${projects[i].tecnologies.map((tech) => `<li>${tech}</li>`).join("")}
    </ul>
    <button type="button" class="pop-mobile-modal-btn" data-id=${
      projects[i].id
    } >See Project</button>
  </div>`;
  }
  return (mobileWorkSection.innerHTML = projectsInHtmlVersion);
});

// Click events to show and hide modals
document.addEventListener("click", (e) => {
  // events for the desktop modal
  if (e.target.className === "pop-desktop-modal-btn") {
    document.querySelector(".desktop-modal-container").style.display = "block";
    document.body.style.overflow = "hidden";
    return;
  }
  if (e.target.className === "close-desktop-modal") {
    document.querySelector(".desktop-modal-container").style.display = "none";
    document.body.style.overflow = "visible";
    return;
  }

  // events for the mobile
  if (e.target.className === "pop-mobile-modal-btn") {
    document.querySelector(".mobile-modal-container").style.display = "block";
    return;
  }

  if (e.target.className === "close-mobile-modal") {
    document.querySelector(".mobile-modal-container").style.display = "none";
    return;
  }
});

// Desktop validation
const desktopForm = document.querySelector("#desktop-contact-form");
const desktopSumbitBtn = document.querySelector(".desktop-contact-submit");
const error = document.querySelector(".error");
desktopSumbitBtn.addEventListener("click", (event) => {
  const email = desktopForm.elements["email"].value;
  const isLowerCase = (str) => str === str.toLowerCase();
  if (!isLowerCase(email)) {
    event.preventDefault();
    error.innerHTML = "Email should be lowecase";
    error.classList.add("emailError");
  }
});

// Mobile form validation
const mobileForm = document.querySelector("#mobile-contact-form");
const mobileSumbitBtn = document.querySelector(".mobile-contact-submit");
mobileSumbitBtn.addEventListener("click", (event) => {
  const email = mobileForm.elements["email"].value;
  const isLowerCase = (str) => str === str.toLowerCase();
  if (!isLowerCase(email)) {
    event.preventDefault();
    error.innerHTML = "Email should be lowecase";
    error.classList.add("emailError");
  }
});

