//Nav bar code

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

//Slider JS code

var slideCounter = 0;

const slide1 = document.querySelector(".tes1");
const slide2 = document.querySelector(".tes2");
const slide3 = document.querySelector(".tes3");

function slideRight() {
  if (slideCounter === 0) {
    slide1.style.display = "none";
    slide2.style.display = "flex";
    slide3.style.display = "none";

    slideCounter = 1;
  } else if (slideCounter === 1) {
    slide1.style.display = "none";
    slide2.style.display = "none";
    slide3.style.display = "flex";

    slideCounter = 2;
  } else if (slideCounter === 2) {
    slide1.style.display = "flex";
    slide2.style.display = "none";
    slide3.style.display = "none";

    slideCounter = 0;
  }
}

function slideLeft() {
  if (slideCounter === 0) {
    slide1.style.display = "none";
    slide2.style.display = "none";
    slide3.style.display = "flex";

    slideCounter = 2;
  } else if (slideCounter === 1) {
    slide1.style.display = "flex";
    slide2.style.display = "none";
    slide3.style.display = "none";

    slideCounter = 0;
  } else if (slideCounter === 2) {
    slide1.style.display = "none";
    slide2.style.display = "flex";
    slide3.style.display = "none";

    slideCounter = 1;
  }
}
