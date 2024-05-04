// Import des templates pour les photographes et les médias
import { photographerTemplate } from "../templates/photographer.js";
import { MediasTemplate } from "../templates/pictureMedia.js";

// Récupération de l'identifiant du photographe depuis l'URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// Fonction pour récupérer les données du photographe à partir de son identifiant
function getPhotographer(id) {
  return fetch("data/photographers.json")
    .then(response => response.json())
    .then(data => data.photographers.find(photographer => photographer.id == id))
    .catch(error => console.error('Erreur lors de la récupération du photographe :', error));
}

// Fonction pour afficher les données du photographe dans la section appropriée du DOM
function displayDataPhotographer(photographer) {
  const photographHeader = document.querySelector(".photograph-header");
  const photographerModel = photographerTemplate(photographer);
  const photographerDom = photographerModel.getUserCardDOM();
  const price = document.querySelector("#price");
  price.textContent = photographerModel.price + "€/Jour";
  const titleContact = document.querySelector(".modal_name");
  titleContact.textContent = photographerModel.name;
  photographHeader.appendChild(photographerDom);
}

// Fonction pour obtenir les médias associés à l'identifiant du photographe
function getMediaByPhotographerId(id) {
  return fetch("data/photographers.json")
    .then(response => response.json())
    .then(data => data.media.filter(media => media.photographerId == id))
    .catch(error => console.error('Erreur lors de la récupération des médias :', error));
}

// Fonction pour afficher les médias dans la section appropriée du DOM
function displayMedias(medias) {
  const picturesSection = document.querySelector(".afficherMedias");
  picturesSection.innerHTML = "";

  if (picturesSection) {
    medias.forEach((picture, index) => {
      const mediasModel = MediasTemplate(picture);
      const MediaCardDOM = mediasModel.getPictursDom(index);
      picturesSection.appendChild(MediaCardDOM);
      CalculTotalLikes(medias);
      displayLightbox(medias);
    });
  }
}

// Fonction pour afficher la lightbox
function displayLightbox(media) {
  const container = document.querySelector(".lightbox_modal");
  const slide = document.createElement("div");
  slide.setAttribute("class", "slide");
  container.innerHTML = "";

  media.forEach((picture) => {
    const mediasModel = MediasTemplate(picture);
    const lightboxCardDOM = mediasModel.creatLightbox();
    container.appendChild(lightboxCardDOM);
  });
}

// Fonction pour calculer le total des likes
function CalculTotalLikes(medias) {
  const encart = document.getElementById("nbLikes");
  let totalLikes = 0;

  medias.forEach((picture) => {
    const mediasModel = MediasTemplate(picture);
    let id = mediasModel.id;
    totalLikes += mediasModel.likes;
    encart.textContent = totalLikes;
    mediasModel.isLiked = false;

    let likeButton = document.getElementById(id);

    if (likeButton) {
      likeButton.addEventListener("click", function () {
        if (mediasModel.isLiked) {
          totalLikes--;
          mediasModel.isLiked = false;
        } else {
          totalLikes++;
          mediasModel.isLiked = true;
        }
        encart.textContent = totalLikes;
      });
    }
  });
}

// Fonction pour trier les médias
function trieMedia(medias) {
  const allFilters = Array.from(
    document.querySelectorAll(".dropdown_content li button")
  );
  const currentFilter = document.querySelector("#current_filter");

  allFilters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const tri = currentFilter.textContent;
      let mediasTries = [];

      switch (tri) {
        case "Titre":
          mediasTries = medias
            .slice()
            .sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "Date":
          mediasTries = medias
            .slice()
            .sort((a, b) => new Date(a.date) - new Date(b.date));
          break;
        case "Popularité":
          mediasTries = medias.slice().sort((a, b) => b.likes - a.likes);
          break;
        default:
          mediasTries = medias;
          break;
      }

      displayMedias(mediasTries);
    });
  });
}

// Fonction d'initialisation pour exécuter les étapes nécessaires au chargement initial des données
function init() {
  getPhotographer(id)
    .then(photographer => {
      displayDataPhotographer(photographer);
      return getMediaByPhotographerId(id);
    })
    .then(medias => {
      displayMedias(medias);
      trieMedia(medias);
    })
    .catch(error => console.error('Erreur lors de l\'initialisation :', error));
}

// Appel de la fonction d'initialisation au chargement de la page
init();
