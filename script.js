const nightMode = document.querySelector(".btn.night");
const dayMode = document.querySelector(".btn.day");
const root = document.documentElement;

const navBarMobileBtn = document.querySelector(".mobile__nav .btn");
const navBarMobileList = document.querySelector(".mobile__nav__list");
const navBarMobileIcon = document.querySelector(".fas.fa-bars");

nightMode.addEventListener("click", () => {
  nightMode.classList.toggle("deactive");
  dayMode.classList.toggle("deactive");

  root.style.setProperty("--primary-color", "#90a0d9");
  root.style.setProperty("--heading-color", "#cdcdff");
  root.style.setProperty("--text-color", "#bdbddd");
  root.style.setProperty("--bg-color", "#23283e");
});

dayMode.addEventListener("click", () => {
  nightMode.classList.toggle("deactive");
  dayMode.classList.toggle("deactive");

  root.style.setProperty("--primary-color", "#33417f");
  root.style.setProperty("--heading-color", "#444");
  root.style.setProperty("--text-color", "#555");
  root.style.setProperty("--bg-color", "#fcfcfc");
});

navBarMobileBtn.addEventListener("click", () => {
  navBarMobileList.classList.toggle("deactive");
  navBarMobileIcon.classList.toggle("fa-bars--active");
});
