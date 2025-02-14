// document.getElementById("yes").addEventListener("click", function(event) {
//     event.preventDefault(); // Empêche le bouton de rediriger immédiatement
//     document.getElementById("responseInput").value = "Yes"; // Ajoute la réponse
//     document.getElementById("valentineForm").submit(); // Soumet le formulaire
//     setTimeout(function() {
//         window.location.href = "index2.html"; // Redirection après soumission
//     }, 1000); // Petit délai pour assurer l'envoi
// });


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


// document.getElementById('no').addEventListener('click', function(event) {
//     event.preventDefault(); // Empêcher le bouton de rediriger immédiatement
//     document.getElementById('responseInput').value = 'No'; // Définir la réponse à "No"

//     fetch('https://formspree.io/f/xanqdklr', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ response: 'No' }) // Envoyer la réponse
//     }).then(() => {
//         const messages = ["Are you sure?", "Pretty sure?", "Are you positive?", "Pookie please"];
//         let index = 0;
//         this.textContent = messages[index];
//     }).catch(error => console.error('Erreur:', error));

//     // Logique pour changer le texte du bouton "No"
//     const messages = ["Are you sure?", "Pretty sure?", "Are you positive?", "Pookie please"];
//     let index = 0;
//     this.textContent = messages[index];

//     this.addEventListener('click', function() {
//         index = (index + 1) % messages.length;
//         this.textContent = messages[index];
//     });
// });


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


// document.getElementById('valentineForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Empêche la soumission par défaut du formulaire

//     // Récupérer la valeur du commentaire
//     const comment = document.getElementById('floatingTextarea2').value;

//     // Envoyer les données à Formspree via fetch
//     fetch('https://formspree.io/f/xanqdklr', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ comment: comment }) // Envoyer le commentaire au format JSON
//     })
//     .then(response => {
//         if (response.ok) {
//             // Afficher une alerte de succès
//             const alertPlaceholder = document.getElementById('alertPlaceholder');
//             alertPlaceholder.innerHTML = `
//                 <div class="alert alert-primary d-flex align-items-center" role="alert">
//                     <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
//                     <div>
//                         Le commentaire a été envoyé avec succès !
//                     </div>
//                 </div>
//             `;

//             // Effacer le champ de commentaire après l'envoi
//             document.getElementById('floatingTextarea2').value = '';
//         } else {
//             throw new Error('Erreur lors de l\'envoi du commentaire');
//         }
//     })
//     .catch(error => {
//         console.error('Erreur:', error);
//         // Afficher une alerte d'erreur
//         const alertPlaceholder = document.getElementById('alertPlaceholder');
//         alertPlaceholder.innerHTML = `
//             <div class="alert alert-danger d-flex align-items-center" role="alert">
//                 <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Error:"><use xlink:href="#exclamation-triangle-fill"/></svg>
//                 <div>
//                     Une erreur s'est produite lors de l'envoi du commentaire.
//                 </div>
//             </div>
//         `;
//     });
// });



