// Import du template pour les photographes
import { photographerTemplate } from '../templates/photographer.js';

// Fonction pour récupérer les données des photographes depuis le fichier JSON
function getPhotographers() {
  return fetch("data/photographers.json")
    .then(response => response.json())
    .catch(error => console.error('Erreur lors de la récupération des photographes :', error));
}

// Fonction pour afficher les données des photographes dans la section appropriée du DOM
function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

// Fonction d'initialisation pour exécuter les étapes nécessaires au chargement initial des données
function init() {
  getPhotographers()
    .then(({ photographers }) => displayData(photographers))
    .catch(error => console.error('Erreur lors de l\'initialisation :', error));
}

// Appel de la fonction d'initialisation au chargement de la page
init();
