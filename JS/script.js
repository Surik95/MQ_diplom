document.querySelector(".feedback-closed").addEventListener("click", function () {
    document.querySelector(".feedback-page").style.display = "none";
  });
document.querySelector("#button").addEventListener("click", function () {
  let display = document.querySelector(".nav");
  let displayTablet = document.querySelector(".nav-tablet");
  let meaningDisplay = getComputedStyle(display).display;
  let meaningDisplayTablet = getComputedStyle(displayTablet).display;
  console.log(meaningDisplay);
  if (document.body.clientWidth < 641) {
    if (meaningDisplay == "none") {
      document.getElementsByClassName("nav")[0].style.display = "flex";
      document.querySelector("#button").className = "button-menu_mobile-active";
    } else if (meaningDisplay == "flex") {
      document.getElementsByClassName("nav")[0].style.display = "none";
      document.querySelector("#button").className = "button-menu";
      console.log(1);
    }
  } else if (
    document.body.clientWidth > 641 &&
    document.body.clientWidth < 1200
  ) {
    if (meaningDisplayTablet == "none") {
      document.getElementsByClassName("nav-tablet")[0].style.display = "flex";
      document.querySelector("#button").className = "button-menu_mobile-active";
      document.getElementsByClassName("header-text")[0].style.marginTop = 0;
    } else if (meaningDisplayTablet == "flex") {
      document.getElementsByClassName("nav-tablet")[0].style.display = "none";
      document.querySelector("#button").className = "button-menu";
      document.getElementsByClassName("header-text")[0].style.marginTop =
        "101px";
    }
  }
});
window.addEventListener('resize', function () {
    let button = this.document.querySelector("#button")
    let buttonClass = button.classList.value
    if (document.body.clientWidth >= 1200) {
        document.querySelector(".nav").style.display = "flex"
        document.getElementsByClassName("nav-tablet")[0].style.display = "none"
        document.querySelector("#button").className = "button-menu";
    } if ((document.body.clientWidth > 640) && (document.body.clientWidth < 1200)) {
        document.querySelector(".nav").style.display = "none" 
        if (buttonClass == "button-menu_mobile-active") {
            document.getElementsByClassName("nav-tablet")[0].style.display = "flex"
            document.getElementsByClassName("header-text")[0].style.marginTop = 0
        } else if (buttonClass == "button-menu") {
            document.getElementsByClassName("header-text")[0].style.marginTop = "101px"
        }
    } else if (document.body.clientWidth <= 640) {
        document.querySelector(".nav").style.display = "none"
        document.getElementsByClassName("nav-tablet")[0].style.display = "none"
        document.getElementsByClassName("header-text")[0].style.marginTop = "32px"

        if (buttonClass == "button-menu_mobile-active") {
            document.getElementsByClassName("nav")[0].style.display = "flex";
        }
    }
})

