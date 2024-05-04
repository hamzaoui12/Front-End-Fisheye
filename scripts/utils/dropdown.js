// Sélection du bouton de menu et du menu lui-même
const menuBtn = document.querySelector(".btn_list");
const menu = document.querySelector(".dropdown_content");

// Ajout d'un écouteur d'événement pour le clic sur le bouton de menu
menuBtn.addEventListener("click", toggleMenu);

// Fonction pour basculer l'affichage du menu
function toggleMenu() {
  const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";

  menu.style.display = isExpanded ? "none" : "contents";

  menuBtn.setAttribute("aria-expanded", !isExpanded);

  document.querySelector(".fa-chevron-down").classList.toggle("rotate");
}

// Attente du chargement complet du DOM
document.addEventListener("DOMContentLoaded", function () {
  const currentFilter = document.querySelector("#current_filter");
  const filterButtons = document.querySelectorAll(
    ".dropdown_content li button"
  );

  let selectedFilterBtn = Array.from(filterButtons).find(
    (btn) => btn.textContent === currentFilter.textContent
  );

  selectedFilterBtn.parentElement.style.display = "none";

  // Ajout d'écouteurs d'événements pour chaque bouton de filtre
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentFilter.textContent = btn.textContent;

      btn.parentElement.style.display = "none";

      if (selectedFilterBtn)
        selectedFilterBtn.parentElement.style.display = "block";

      selectedFilterBtn = btn;
      toggleMenu();
    });
  });
});
