// screen width

const windowWidth = screen.width;

//Header section

const menubutton = document.querySelector(".navbar-icon");
const closeMenu = document.querySelector(".close-icon");

function showSideMenu() {
  document.querySelector(".nav-list").style.right = "0";
  document.body.style.overflow = "hidden";
}

function hideSideMenu() {
  document.querySelector(".nav-list").style.right = "-80%";
  document.body.style.overflow = "auto";
}

menubutton.addEventListener("click", () => showSideMenu());

closeMenu.addEventListener("click", () => hideSideMenu());

if (windowWidth < 992) {
  const navItems = document.querySelectorAll(".nav-items");
  navItems.forEach((items) => {
    items.addEventListener("click", () => hideSideMenu());
  });
}

// Crousel JS

const sliderBtn = document.querySelectorAll(".slider-btn");
const cardMenu = document.querySelectorAll(".card-menu");

for (const singleBtn of sliderBtn) {
  singleBtn.addEventListener("click", (e) => {
    if (e.target.id === "btn-one") {
      cardFirstPosition();
    } else if (e.target.id === "btn-two") {
      cardSecondPosition();
    } else if (e.target.id === "btn-three") {
      cardThirdPosition();
    }
  });
}

let sliderStatus = 2;

setInterval(() => {
  if (sliderStatus === 1) {
    cardFirstPosition();
    sliderStatus = 2;
  } else if (sliderStatus === 2) {
    cardSecondPosition();
    sliderStatus = 3;
  } else if (sliderStatus === 3) {
    cardThirdPosition();
    sliderStatus = 1;
  }
}, 5000);

function cardFirstPosition() {
  for (const cards of cardMenu) {
    cards.style.left = "0";
  }
  sliderBtn[0].classList.add("active-button");
  sliderBtn[1].classList.remove("active-button");
  sliderBtn[2].classList.remove("active-button");
}

function cardSecondPosition() {
  for (const cards of cardMenu) {
    if (windowWidth < 768) {
      cards.style.left = "-100%";
    } else if (windowWidth < 992) {
      cards.style.left = "-50%";
    } else {
      cards.style.left = "-33.333%";
    }
  }
  sliderBtn[1].classList.add("active-button");
  sliderBtn[0].classList.remove("active-button");
  sliderBtn[2].classList.remove("active-button");
}

function cardThirdPosition() {
  for (const cards of cardMenu) {
    if (windowWidth < 768) {
      cards.style.left = "-200%";
    } else if (windowWidth < 992) {
      cards.style.left = "-100%";
    } else {
      cards.style.left = "-66.666%";
    }
  }
  sliderBtn[2].classList.add("active-button");
  sliderBtn[0].classList.remove("active-button");
  sliderBtn[1].classList.remove("active-button");
}

// Page Scrolling JS
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  if (scroll > 1) {
    navbar.classList.add("white-navbar");
  } else {
    navbar.classList.remove("white-navbar");
  }

  if (scroll > 900) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

// Our menu JS

const clickItems = document.querySelectorAll(".image-side");

clickItems.forEach((items) => {
  if (windowWidth < 768) {
    items.classList.add("disabled");
  } else {
    items.classList.remove("disabled");
  }

  items.addEventListener("click", (e) => {
    e.target.classList.add("disabled");
    const nextSibling = e.target.nextElementSibling;
    nextSibling.children[0].style.top = "0";
  });
});

// News Section JS

const tabButtons = document.querySelectorAll(".tab-button");
const tabContent = document.querySelectorAll(".content");

tabButtons.forEach((singleButton) => {
  singleButton.addEventListener("click", (e) => {
    function buttonUnactive() {
      e.target.parentElement.classList.add("active");
      const allChildren = e.target.parentElement.parentElement.children;
      let siblings = [];
      for (const child of allChildren) {
        if (child != e.target.parentElement) {
          siblings.push(child);
        }
      }
      siblings.forEach((expectSiblings) => {
        expectSiblings.classList.remove("active");
      });
    }
    if (e.target.id === "all-categories") {
      buttonUnactive();
      tabContent[0].classList.add("active");
      tabContent[1].classList.remove("active");
      tabContent[2].classList.remove("active");
    } else if (e.target.id === "fast-foods") {
      buttonUnactive();
      tabContent[1].classList.add("active");
      tabContent[0].classList.remove("active");
      tabContent[2].classList.remove("active");
    } else {
      buttonUnactive();
      tabContent[2].classList.add("active");
      tabContent[0].classList.remove("active");
      tabContent[1].classList.remove("active");
    }
  });
});

// Video Section JS

const videoSection = document.querySelector(".video-display");
const iframe = document.querySelector(".iframe");

const openModel = () => {
  iframe.src += "&autoplay=1";
  videoSection.classList.add("show");
  videoSection.classList.remove("hide");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  const videoURL = iframe.src;
  const value = videoURL.replace("&autoplay=1", "");
  iframe.src = value;
  videoSection.classList.add("hide");
  videoSection.classList.remove("show");
  document.body.style.overflow = "auto";
};

// Client review JS

const items = document.querySelectorAll(".carousel-inner .carousel-item");
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function nextItem(n) {
  hideItem("to-left");
  changeCurrentItem(n + 1);
  showItem("from-right");
}

function previousItem(n) {
  hideItem("to-right");
  changeCurrentItem(n - 1);
  showItem("from-left");
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener("animationend", function () {
    this.classList.remove("active", direction);
  });
}

function showItem(direction) {
  items[currentItem].classList.add("next", direction);
  items[currentItem].addEventListener("animationend", function () {
    this.classList.remove("next", direction);
    this.classList.add("active");
    isEnabled = true;
  });
}

document
  .querySelector(".fa-chevron-left")
  .addEventListener("click", function () {
    if (isEnabled) {
      previousItem(currentItem);
    }
  });

document
  .querySelector(".fa-chevron-right")
  .addEventListener("click", function () {
    if (isEnabled) {
      nextItem(currentItem);
    }
  });


// menu clicking function

const menuItems = document.querySelectorAll('.menu-items')
menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    function sectionValue(section) {
      const ourMenuSection = document.getElementById(section)
      const ourMenuSectionPosition = ourMenuSection.offsetTop
      window.scrollTo({
        top: ourMenuSectionPosition,
        behavior: "smooth"
      })
    }
    if (e.target.id === "home-menu") {
      sectionValue("header-section")
    } else if (e.target.id === "our-menu") {
      sectionValue("our-menu-section")
    } else if (e.target.id === "about-food") {
      sectionValue("about-food-section")
    } else if (e.target.id === "watch-video") {
      sectionValue("watch-video-section")
    } else if (e.target.id === "lets-connect") {
      sectionValue("lets-connect-section")
    }
  })
})