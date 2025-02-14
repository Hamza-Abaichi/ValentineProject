// // Gestion de la soumission du formulaire
// document.getElementById('commentForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Empêche la soumission par défaut du formulaire

//     // Récupérer les valeurs du formulaire
//     const name = document.querySelector('input[placeholder="Your name"]').value;
//     const comment = document.getElementById('floatingTextarea2').value;

//     // Vérifier si le nom et le commentaire sont remplis
//     if (!name.trim() || !comment.trim()) {
//         alert("Please fill in both your name and message.");
//         return;
//     }

//     // Envoyer les données à Formspree via fetch
//     fetch('https://formspree.io/f/xanqdklr', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name: name, comment: comment }) // Ajout du nom
//     })
//     .then(response => {
//         if (response.ok) {
//             // Afficher une alerte de succès
//             document.getElementById('alertPlaceholder').innerHTML = `
//                 <div class="alert alert-success d-flex align-items-center" role="alert">
//                     ✅ Response sent successfully!
//                 </div>
//             `;

//             // Effacer les champs après l'envoi
//             document.querySelector('input[placeholder="Your name"]').value = '';
//             document.getElementById('floatingTextarea2').value = '';

//             // Faire disparaître l'alerte après 5 secondes
//             setTimeout(() => {
//                 document.getElementById('alertPlaceholder').innerHTML = '';
//             }, 5000);
//         } else {
//             throw new Error('Error sending the comment');
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         // Afficher une alerte d'erreur
//         document.getElementById('alertPlaceholder').innerHTML = `
//             <div class="alert alert-danger d-flex align-items-center" role="alert">
//                 ❌ An error occurred while sending the comment.
//             </div>
//         `;

//         setTimeout(() => {
//             document.getElementById('alertPlaceholder').innerHTML = '';
//         }, 5000);
//     });
// });



//Gestion de la soumission du formulaire
document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    // Récupérer les valeurs du formulaire
    const name = document.querySelector('input[placeholder="Your name"]').value;
    const comment = document.getElementById('floatingTextarea2').value;

    // Vérifier si le nom et le commentaire sont remplis
    if (!name.trim() || !comment.trim()) {
        alert("Please fill in both your name and message.");
        return;
    }

    // Envoyer les données à Formspree via fetch
    fetch('https://formspree.io/f/xanqdklr?no_redirect=1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _name: name, comment: comment }) // Ajout du nom
    })
    .then(response => {
        if (response.ok) {
            // Afficher une alerte de succès
            document.getElementById('alertPlaceholder').innerHTML = `
                <div class="alert alert-success d-flex align-items-center" role="alert">
                    ✅ Response sent successfully!
                </div>
            `;

            // Effacer les champs après l'envoi
            document.querySelector('input[placeholder="Your name"]').value = '';
            document.getElementById('floatingTextarea2').value = '';

            // Faire disparaître l'alerte après 5 secondes
            setTimeout(() => {
                document.getElementById('alertPlaceholder').innerHTML = '';
            }, 5000);
        } else {
            throw new Error('Error sending the comment');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Afficher une alerte d'erreur
        document.getElementById('alertPlaceholder').innerHTML = `
            <div class="alert alert-danger d-flex align-items-center" role="alert">
                ❌ An error occurred while sending the comment.
            </div>
        `;

        setTimeout(() => {
            document.getElementById('alertPlaceholder').innerHTML = '';
        }, 5000);
    });
});



