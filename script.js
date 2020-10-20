/*Fixed header*/
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("static-header");
  } else {
    header.classList.remove("static-header");
  };
});

/*Burger*/
const burgerButton = document.querySelector(".burger-button");
const wrapperBG = document.querySelector(".wrapper");
const mainNavigationBG = document.querySelector(".main-navigation");
const logo = document.querySelector(".logo");
const navigationItem = document.querySelectorAll(".navigation-item");
const navigation = document.querySelector(".navigation");

burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("burger-button-active");
  wrapperBG.classList.toggle("wrapper-bg");
  mainNavigationBG.classList.toggle("main-navigation-bg");
  logo.classList.toggle("logo-bg");
  for (let index = 0; index < navigationItem.length; index++) {
    navigationItem[index].classList.toggle("navigation-item-bg");
  };
  navigation.classList.toggle("navigation");
});

/*Active buttons*/
const navigationButtons = document.querySelectorAll(".navigation-button");

for (let index = 0; index < navigationButtons.length; index++) {
  navigationButtons[index].addEventListener("click", (event) => {
    navigationButtons.forEach(element => element.classList.remove("active-button"));
    event.currentTarget.classList.add("active-button");
  });
};

window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;
  document.querySelectorAll(".section").forEach((element, index) => {
    if (element.offsetTop - document.querySelector(".header").clientHeight <= scrollDistance) {
      document.querySelectorAll("nav a").forEach((element) => {
        if (element.classList.contains("active-button"))
          element.classList.remove("active-button");
      });
      document.querySelectorAll("nav li")[index].querySelector("a").classList.add("active-button");
    };
  });
});

/*Slider*/
const sliderButtons = document.querySelectorAll(".slider-button");
const slider = document.querySelector(".slider");
const removingSliderPicture = document.querySelector(".removing-slider-picture");

sliderButtons.forEach(element => element.addEventListener("click", () => {
  slider.classList.toggle("slider-active");
  removingSliderPicture.classList.toggle("first-picture-toggle");
}));

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    sliderButtons.forEach(element => element.classList.add("slider-button-invisible"));
  } else {
    sliderButtons.forEach(element => element.classList.remove("slider-button-invisible"));
  };
});

/*Portfolio mixing*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const filterLinks = document.querySelectorAll(".filter-link");
const portfolio = document.querySelectorAll(".portfolio-image");

for (let index = 0; index < filterLinks.length; index++) {
  filterLinks[index].addEventListener("click", (event) => {
    portfolio[getRandomInt(1, 8)].classList.toggle("random");
    filterLinks.forEach(element => element.classList.remove("active-portfolio-button"));
    event.currentTarget.classList.add("active-portfolio-button");
  });
};

/*Scroll animation*/
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
};
