// СЛАЙДЪР (НАДОЛУ)
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex -= n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let showGroups = document.getElementsByClassName("show-group");
  if (n > showGroups.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = showGroups.length; }
  for (i = 0; i < showGroups.length; i++) {
    showGroups[i].style.display = "none";
  }
  showGroups[slideIndex - 1].style.display = "flex";
}
// СЛАЙДЪР (НАГОРЕ)