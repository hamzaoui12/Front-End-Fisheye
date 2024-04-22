const filterMenuButton = document.querySelector(".btn_list");
const filterMenu = document.querySelector(".dropdown_content");
filterMenuButton.addEventListener("click", dropdown);

function dropdown() {
  const filterButtons = document.querySelectorAll(".dropdown_content button");
  const isExpanded =
    filterMenuButton.getAttribute("aria-expanded") === "true" || false;

  if (isExpanded) {
    filterMenu.style.display = "none";
    filterMenuButton.focus();
  } else {
    filterMenu.style.display = "contents";
  }

  filterMenuButton.setAttribute("aria-expanded", !isExpanded);
  document.querySelector(".fa-chevron-down").classList.toggle("rotate");
}

document.addEventListener("DOMContentLoaded", function () {
  const currentFilter = document.querySelector("#current_filter");
  const allFilters = Array.from(
    document.querySelectorAll(".dropdown_content li button")
  );

  let filterAlreadySelected = allFilters.find(
    (filter) => filter.textContent == currentFilter.textContent
  );

  filterAlreadySelected.parentElement.style.display = "none";

  allFilters.forEach((filter) => {
    filter.addEventListener("click", () => {
      currentFilter.textContent = filter.textContent;

      const parentLi = filter.parentElement;
      parentLi.style.display = "none";

      if (filterAlreadySelected) {
        const previousParentLi = filterAlreadySelected.parentElement;
        previousParentLi.style.display = "block";
      }

      filterAlreadySelected = filter;

      dropdown();
    });
  });
});
