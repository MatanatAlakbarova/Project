// navbar//
$('.dropdown').hover(function () {
  $(this).addClass('show'); $(this).find('.dropdown-menu').addClass('show');
}, function () { $(this).removeClass('show'); $(this).find('.dropdown-menu').removeClass('show'); });
// navbar//

// solutionIntro//
let images = document.querySelectorAll(".gallery a");
let popup = document.querySelector(".popup");
let biggestImg = document.querySelector(".popup .inner img");
let closeIcon = document.querySelector(".close-icon");
let prevBtn = document.querySelector(".arrows .prev");
let nextBtn = document.querySelector(".arrows .next");

images.forEach((image) => {
  image.addEventListener("click", function (e) {
    e.preventDefault();
    doOpen();
    changableImage(this);
    this.classList.add("showSlide");
  });
});

nextBtn.addEventListener("click", function () {
  let showSlide = document.querySelector(".showSlide");
  nextElemSib(showSlide);
});

prevBtn.addEventListener("click", function () {
  let showSlide = document.querySelector(".showSlide");
  prevElemSib(showSlide);
});

popup.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    doClose();
  }
});

closeIcon.addEventListener("click", function () {
  doClose();
});

document.addEventListener("keydown", (e) => {
 switch (e.code) {
   case "Escape":
    doClose();
     break;
  //    case "ArrowRight":
  //       let showSlide = document.querySelector(".showSlide");
  // nextElemSib(showSlide);
  //  default:
  //    break;
 }
 
});

function doOpen() {
  popup.style.display = "flex";
}

function doClose() {
  popup.style.display = "none";
}

function changableImage(item) {
  let imgSrc = item.getAttribute("href");
  biggestImg.setAttribute("src", imgSrc);
}

function nextElemSib(item) {
  if (item.nextElementSibling !== null) {
    item.nextElementSibling.classList.add("showSlide");
    changableImage(item.nextElementSibling);
  } else {
    item.parentElement.children[0].classList.add("showSlide");
    changableImage(item.parentElement.children[0]);
  }
  item.classList.remove("showSlide");
}

function prevElemSib(item) {
  let length = item.parentElement.children.length;
  if (item.previousElementSibling !== null) {
    item.previousElementSibling.classList.add("showSlide");
    changableImage(item.previousElementSibling);
  } else {
    item.parentElement.children[length - 1].classList.add("showSlide");
    changableImage(item.parentElement.children[length - 1]);
  }
  item.classList.remove("showSlide");
}
// SolutionIntro//
