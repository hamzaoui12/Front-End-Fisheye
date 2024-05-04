// Import du template pour les photographes
import { photographerTemplate } from '../templates/photographer.js';

// Fonction asynchrone pour récupérer les données des photographes depuis le fichier JSON
async function getPhotographers() {
  const response = await fetch("data/photographers.json");
  const photographers = await response.json();
  return photographers;
}

// Fonction asynchrone pour afficher les données des photographes dans la section appropriée du DOM
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

// Fonction d'initialisation pour exécuter les étapes nécessaires au chargement initial des données
async function init() {
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

// Appel de la fonction d'initialisation au chargement de la page
init();
