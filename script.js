
/*Fixed header*/
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("static-header");
  } else {
    header.classList.remove("static-header");
  }
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
  navigationItem[0].classList.toggle("navigation-item-bg");
  navigationItem[1].classList.toggle("navigation-item-bg");
  navigationItem[2].classList.toggle("navigation-item-bg");
  navigationItem[3].classList.toggle("navigation-item-bg");
  navigationItem[4].classList.toggle("navigation-item-bg");
  navigation.classList.toggle("navigation");
});



/*Active buttons*/
const active = document.querySelectorAll(".navigation-button");
home_item.addEventListener("click", () => {
  active[0].classList.add("active-button");
  active[1].classList.remove("active-button");
  active[2].classList.remove("active-button");
  active[3].classList.remove("active-button");
  active[4].classList.remove("active-button");
})
services_item.addEventListener("click", () => {
  active[1].classList.add("active-button");
  active[0].classList.remove("active-button");
  active[2].classList.remove("active-button");
  active[3].classList.remove("active-button");
  active[4].classList.remove("active-button");
})
portfolio_item.addEventListener("click", () => {
  active[2].classList.add("active-button");
  active[0].classList.remove("active-button");
  active[1].classList.remove("active-button");
  active[3].classList.remove("active-button");
  active[4].classList.remove("active-button");
})
about_item.addEventListener("click", () => {
  active[3].classList.add("active-button");
  active[0].classList.remove("active-button");
  active[1].classList.remove("active-button");
  active[2].classList.remove("active-button");
  active[4].classList.remove("active-button");
})
contact_item.addEventListener("click", () => {
  active[4].classList.add("active-button");
  active[0].classList.remove("active-button");
  active[1].classList.remove("active-button");
  active[2].classList.remove("active-button");
  active[3].classList.remove("active-button");
})

/*Buttons in scroll*/
window.addEventListener("scroll", () => {
  if (window.scrollY >= 0 && window.scrollY < 500) {
    active[0].classList.add("active-button");
    active[1].classList.remove("active-button");
    active[2].classList.remove("active-button");
    active[3].classList.remove("active-button");
    active[4].classList.remove("active-button");;
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY >= 500 && window.scrollY < 1000) {
    active[1].classList.add("active-button");
    active[0].classList.remove("active-button");
    active[2].classList.remove("active-button");
    active[3].classList.remove("active-button");
    active[4].classList.remove("active-button");;
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY >= 1000 && window.scrollY < 1500) {
    active[2].classList.add("active-button");
    active[0].classList.remove("active-button");
    active[1].classList.remove("active-button");
    active[3].classList.remove("active-button");
    active[4].classList.remove("active-button");;
  }
});

/*Slider*/
const sliderButton = document.querySelectorAll(".slider-button");
const slider = document.querySelector(".slider");

sliderButton[0].addEventListener("click", () => {
  slider.classList.toggle("slider-active");
})
sliderButton[1].addEventListener("click", () => {
  slider.classList.toggle("slider-active");
})
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    sliderButton[0].classList.add("slider-button-invisible");
    sliderButton[1].classList.add("slider-button-invisible");
  } else {
    sliderButton[0].classList.remove("slider-button-invisible");
    sliderButton[1].classList.remove("slider-button-invisible");
  }
});

/*Portfolio mixing*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const all = document.querySelectorAll(".filter-link");
const portfolio = document.querySelectorAll(".portfolio-image");
all[0].addEventListener("click", () => {
  portfolio[getRandomInt(1, 8)].classList.toggle("random");
})
all[1].addEventListener("click", () => {
  portfolio[getRandomInt(1, 8)].classList.toggle("random");
})
all[2].addEventListener("click", () => {
  portfolio[getRandomInt(1, 8)].classList.toggle("random");
})
all[3].addEventListener("click", () => {
  portfolio[getRandomInt(1, 8)].classList.toggle("random");
})

/*Portfolio buttons*/
const activePortfolioButtons = document.querySelectorAll(".filter-link");
activePortfolioButtons[0].addEventListener("click", () => {
  activePortfolioButtons[0].classList.add("active-portfolio-button");
  activePortfolioButtons[1].classList.remove("active-portfolio-button");
  activePortfolioButtons[2].classList.remove("active-portfolio-button");
  activePortfolioButtons[3].classList.remove("active-portfolio-button");
})
activePortfolioButtons[1].addEventListener("click", () => {
  activePortfolioButtons[1].classList.add("active-portfolio-button");
  activePortfolioButtons[0].classList.remove("active-portfolio-button");
  activePortfolioButtons[2].classList.remove("active-portfolio-button");
  activePortfolioButtons[3].classList.remove("active-portfolio-button");
})
activePortfolioButtons[2].addEventListener("click", () => {
  activePortfolioButtons[2].classList.add("active-portfolio-button");
  activePortfolioButtons[0].classList.remove("active-portfolio-button");
  activePortfolioButtons[1].classList.remove("active-portfolio-button");
  activePortfolioButtons[3].classList.remove("active-portfolio-button");
})
activePortfolioButtons[3].addEventListener("click", () => {
  activePortfolioButtons[3].classList.add("active-portfolio-button");
  activePortfolioButtons[0].classList.remove("active-portfolio-button");
  activePortfolioButtons[1].classList.remove("active-portfolio-button");
  activePortfolioButtons[2].classList.remove("active-portfolio-button");
})

/*Scroll animation*/
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}
