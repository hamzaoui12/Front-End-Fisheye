// Fonction pour ouvrir la lightbox et afficher une image spécifique
function openLightbox(index) {
  const modal = document.querySelector(".lightbox");
  modal.style.display = "block";
  slideIndex = parseInt(index) + 1;
  showSlides(slideIndex);
}

// Fonction pour fermer la lightbox
function closeLightbox() {
  const modal = document.querySelector(".lightbox");
  modal.style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

// Fonction pour passer à la diapositive suivante
function next() {
  slideIndex = slideIndex + 1;
  showSlides(slideIndex);
}

// Fonction pour revenir à la diapositive précédente
function previous() {
  slideIndex = slideIndex - 1;
  showSlides(slideIndex);
}

// Fonction pour afficher la diapositive correspondant à l'index donné
function showSlides(slideIndex) {
  let slides = document.getElementsByClassName("slide");

  if (slideIndex > slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  if (slideIndex - 1 >= 0) {
    slides[slideIndex - 1].style.display = "block";
  }
}

// Écouteur d'événements pour détecter les touches clavier pressées
document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "Escape":
      closeLightbox();
      break;
    case "ArrowLeft":
      previous();
      break;
    case "ArrowRight":
      next();
      break;
  }
});
