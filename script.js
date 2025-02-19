document.getElementById("yes").addEventListener("click", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    document.getElementById("responseInput").value = "Yes";

    fetch("https://formspree.io/f/xanqdklr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ response: "Yes" }) // Envoie la réponse
    }).then(() => {
        window.location.href = "index2.html"; // Redirige immédiatement
    }).catch(error => console.error("Erreur:", error));
});


document.getElementById('no').addEventListener('click', function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut du bouton

    // Envoyer la réponse "No" une seule fois (lors du premier clic)
    if (!this.dataset.responseSent) {
        fetch('https://formspree.io/f/xanqdklr', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ response: 'No' }) // Envoyer la réponse
        }).catch(error => console.error('Erreur:', error));

        this.dataset.responseSent = 'true'; // Marquer que la réponse a été envoyée
    }

    // Logique pour changer le texte du bouton "No"
    const messages = ["Are you sure?", "Pretty sure?", "Are you positive?", "Pookie please"];
    let index = parseInt(this.dataset.messageIndex || 0); // Récupérer l'index actuel ou 0 par défaut

    this.textContent = messages[index]; // Afficher le message actuel
    index = (index + 1) % messages.length; // Passer au message suivant
    this.dataset.messageIndex = index; // Sauvegarder l'index pour le prochain clic
});
