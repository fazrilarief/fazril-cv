// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

function showPopup(imageSrc) {
  var popup = document.getElementById("imagePopup");
  var popupImage = document.getElementById("popupImage");

  popupImage.src = imageSrc;
  popup.style.display = "flex";
}

function closePopup() {
  var popup = document.getElementById("imagePopup");
  popup.style.display = "none";
}

function showCarousel(imageSrc) {
  var carouselImage = document.getElementById("carouselImage");
  carouselImage.src = imageSrc;

  $("#imageCarousel").modal("show");
}

const navBlurred = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("blurred");
  } else {
    navbar.classList.remove("blurred");
  }
});
