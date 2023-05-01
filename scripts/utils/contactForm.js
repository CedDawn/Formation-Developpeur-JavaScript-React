function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

function submitModal() {
    const prenom = document.querySelector("#firstname").value;
    const nom = document.querySelector("#lastname").value;
    const mail = document.querySelector("#mail").value;
    const msg = document.querySelector("#message").value;
    console.log("Prénom : " + prenom);
    console.log("Nom : " + nom);
    console.log("Email : " + mail);
    console.log("Message : " + msg);
    closeModal()
}

