import "./menu.js";

document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector(".slider-container");
    const nextNav = document.querySelector(".slider-nav-next");
    const prevNav = document.querySelector(".slider-nav-prev");
    const interval = 2000;
    let slideTimer;
  
    function startSlideTimer() {
      slideTimer = setInterval(() => {
        nextNav.click();
      }, interval);
    }
  
    function stopSlideTimer() {
      clearInterval(slideTimer);
    }
  
    startSlideTimer();
  
    sliderContainer.addEventListener("mouseover", stopSlideTimer);

    sliderContainer.addEventListener("mouseout", startSlideTimer);
  });