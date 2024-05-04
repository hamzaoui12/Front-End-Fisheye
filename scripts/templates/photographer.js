export function photographerTemplate(data) {
  // Extraction des données
  const { id, name, portrait, tagline, price, country, city } = data;
  const picture = `assets/photographers/${portrait}`;

  // Fonction pour créer le DOM de la carte utilisateur
  function getUserCardDOM() {
    // Création des éléments HTML
    const article = document.createElement("article");
    const link = createLink();
    const img = createImage();
    const divContact = createContactDiv();
    const h2 = createHeader();
    const div = createInfoDiv();
    const locationInfos = createLocationInfo();
    const taglineInfos = createTaglineInfo();
    const priceInfos = createPriceInfo();

    // Ajout des éléments à l'article
    article.appendChild(link);
    link.appendChild(img);
    article.appendChild(divContact);
    div.appendChild(h2);
    div.appendChild(locationInfos);
    div.appendChild(taglineInfos);
    div.appendChild(priceInfos);
    article.appendChild(div);

    return article;
  }

  // Fonctions utilitaires pour créer des éléments HTML
  function createLink() {
    const link = document.createElement("a");
    link.href = `./photographer.html?id=${id}`;
    link.setAttribute("aria-label", name);
    return link;
  }

  function createImage() {
    const img = document.createElement("img");
    img.src = picture;
    img.alt = `Photo du profil de ${name}`;
    img.classList.add("photographer_picture");
    return img;
  }

  function createContactDiv() {
    const divContact = document.createElement("div");
    const button = document.querySelector(".contact_button");
    if (button !== null) {
      divContact.appendChild(button);
    }
    return divContact;
  }

  function createHeader() {
    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.classList.add("photographer_name");
    return h2;
  }

  function createInfoDiv() {
    const div = document.createElement("div");
    div.classList.add("infos");
    return div;
  }

  function createLocationInfo() {
    const locationInfos = document.createElement("p");
    locationInfos.textContent = `${city}, ${country}`;
    locationInfos.classList.add("photographer_city");
    return locationInfos;
  }

  function createTaglineInfo() {
    const taglineInfos = document.createElement("p");
    taglineInfos.textContent = tagline;
    taglineInfos.classList.add("photographer_tagline");
    return taglineInfos;
  }

  function createPriceInfo() {
    const priceInfos = document.createElement("p");
    priceInfos.textContent = `${price} €/jour`;
    priceInfos.classList.add("photographer_price");
    return priceInfos;
  }

  // Retourne un objet avec les données et la fonction DOM
  return {
    name,
    picture,
    city,
    country,
    tagline,
    price,
    getUserCardDOM,
  };
}
