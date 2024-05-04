// Fonction pour afficher le formulaire modal de contact
function displayModal() {
  const modal = document.getElementById("contact_modal");
  if (modal) {
    modal.style.display = "block"; 
  }
}

// Fonction pour fermer le formulaire modal de contact
function closeModal() {
  const modal = document.getElementById("contact_modal");
  if (modal) {
    modal.style.display = "none"; 
    resetForm(); 
    resetErrors(); 
  }
}

// Fonction pour réinitialiser les champs du formulaire
function resetForm() {
  document.getElementById("firstName").value = ""; 
  document.getElementById("lastName").value = ""; 
  document.getElementById("email").value = ""; 
  document.getElementById("message").value = ""; 
}

// Fonction pour réinitialiser les messages d'erreur
function resetErrors() {
  document.getElementById("firstNameError").innerText = ""; 
  document.getElementById("lastNameError").innerText = ""; 
  document.getElementById("emailError").innerText = ""; 
  document.getElementById("messageError").innerText = ""; 
}

// Fonction pour valider le formulaire
function validateForm() {
  const firstName = document.getElementById("firstName").value; 
  const lastName = document.getElementById("lastName").value; 
  const email = document.getElementById("email").value; 
  const message = document.getElementById("message").value; 

  let isValid = true; 

  // Validation du prénom
  if (firstName.length < 2) {
    document.getElementById("firstNameError").innerText = "Merci de renseigner deux caractères minimum"; 
    isValid = false; 
  } else {
    document.getElementById("firstNameError").innerText = ""; 
  }

  // Validation du nom
  if (lastName.length < 2) {
    document.getElementById("lastNameError").innerText = "Merci de renseigner deux caractères minimum"; 
    isValid = false; 
  } else {
    document.getElementById("lastNameError").innerText = ""; 
  }

  // Validation de l'email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText = "Merci de renseigner une adresse email valide"; 
    isValid = false; 
  } else {
    document.getElementById("emailError").innerText = ""; 
  }

  // Validation du message
  if (message.length < 10) {
    document.getElementById("messageError").innerText = "Merci de renseigner dix caractères minimum"; 
    isValid = false; 
  } else {
    document.getElementById("messageError").innerText = ""; 
  }

  return isValid; 
}

// Fonction pour envoyer le formulaire de contact
function sendFormContact() {
  if (validateForm()) {
    const name = document.getElementById("firstName").value; 
    const lastName = document.getElementById("lastName").value; 
    const email = document.getElementById("email").value; 
    const message = document.getElementById("message").value; 

    console.log("Prénom:", name); 
    console.log("Nom:", lastName); 
    console.log("Email:", email); 
    console.log("Message:", message); 

    displayConfirmationMessage(); 
    closeModal(); 
  }
}

// Fonction pour afficher un message de confirmation
function displayConfirmationMessage() {
  alert("Votre message a été envoyé avec succès !"); 
}

// Écouter l'événement de soumission du formulaire
const form = document.querySelector(".contact_form");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    sendFormContact(); 
  });
}

// Écouter l'événement de clic sur le bouton de fermeture
const btnClose = document.querySelector(".close");
if (btnClose) {
  btnClose.addEventListener("click", closeModal);
}
