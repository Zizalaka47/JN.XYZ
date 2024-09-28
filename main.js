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
  let showGroups = document.getElementsByClassName("show-group");
  if (n > showGroups.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = showGroups.length; }
  for (let i = 0; i < showGroups.length; i++) {
    showGroups[i].style.display = "none";
  }
  showGroups[slideIndex - 1].style.display = "flex";
}
// СЛАЙДЪР (НАГОРЕ)

// РЕКЛАМИ ВЪВ ФУТЪР (НАДОЛУ)
const xIconsAd = document.querySelectorAll('.img-footer-container img');
const ads = document.querySelectorAll('.img-footer-container');

for (const x of xIconsAd) {
  x.addEventListener("click", (e) => {
    e.stopPropagation(); //Ако го няма рекламите ще се отварят при затваряне
    const parent = x.closest(".img-footer-container");
    if (window.screen.width >= 1010) {
      parent.style.visibility = "hidden";
      parent.style.opacity = "0";
    }
    else {
      parent.style.display = "none";
    }
  });
}

for (let i = 0; i < ads.length; i++) {
  let ad = ads[i];
  ad.addEventListener("click", () => {
    if (i === 0) {
      window.open("https://www.google.com", '_blank');
    }
    else {
      window.open("https://www.youtube.com/", '_blank');
    }
  });
}
// РЕКЛАМИ ВЪВ ФУТЪР (НАГОРЕ)
