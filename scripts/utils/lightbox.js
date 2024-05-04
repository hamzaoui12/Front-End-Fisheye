// Fonction pour ouvrir la lightbox et afficher la diapositive correspondante
function ouvrirLightbox(index) {
  const modal = document.querySelector(".lightbox");
  modal.style.display = "block"; 
  slideIndex = parseInt(index) + 1; 
  afficherDiapositive(slideIndex); 
}

// Fonction pour fermer la lightbox
function fermerLightbox() {
  const modal = document.querySelector(".lightbox");
  modal.style.display = "none"; 
}

// Initialiser l'index de la diapositive et afficher la première diapositive
let slideIndex = 1;
afficherDiapositive(slideIndex);

// Fonction pour afficher la diapositive suivante
function diapoSuivante() {
  slideIndex = slideIndex + 1;
  afficherDiapositive(slideIndex);
}

// Fonction pour afficher la diapositive précédente
function diapoPrecedente() {
  slideIndex = slideIndex - 1;
  afficherDiapositive(slideIndex);
}

// Fonction pour afficher la diapositive correspondante à l'index spécifié
function afficherDiapositive(slideIndex) {
  let diapositives = document.getElementsByClassName("slide");

  // Gérer les conditions de bord pour l'index de la diapositive
  if (slideIndex > diapositives.length) {
    slideIndex = 1; 
  }
  if (slideIndex < 1) {
    slideIndex = diapositives.length; 
  }

  // Masquer toutes les diapositives
  for (let i = 0; i < diapositives.length; i++) {
    diapositives[i].style.display = "none";
  }

  // Afficher la diapositive correspondante à l'index spécifié
  if (slideIndex - 1 >= 0) {
    diapositives[slideIndex - 1].style.display = "block";
  }
}

// Écouteur d'événements pour gérer la navigation au clavier
document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "Escape":
      fermerLightbox();
      break;
    case "ArrowLeft":
      diapoPrecedente();
      break;
    case "ArrowRight":
      diapoSuivante(); 
      break;
  }
});
