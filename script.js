console.log("script.js chargé !");

async function fetchPlayer() {
    // Récupérer l'input du joueur
    let playerTag = document.getElementById('playerTag').value.trim();

    // Vérifier si l'utilisateur a bien saisi un tag
    if (!playerTag) {
        alert("Veuillez entrer un tag de joueur !");
        return;
    }

    // Ajouter un # devant le tag s'il n'est pas présent
    if (!playerTag.startsWith("#")) {
        playerTag = "#" + playerTag;
    }

    // Encodage du tag pour l'URL (le # doit être remplacé par %23)
    let encodedTag = encodeURIComponent(playerTag);

    // URL de l'API avec le tag encodé
    const url = `https://api.brawlstars.com/v1/players/${encodedTag}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer TON_TOKEN_ICI',  // ⚠️ Remplace par ton vrai token API
                'Accept': 'application/json'
            }
        });

        // Vérifier si la réponse est OK
        if (!response.ok) {
            throw new Error(`Erreur API: ${response.status} - ${response.statusText}`);
        }

        // Convertir en JSON
        const data = await response.json();
        console.log("Données du joueur :", data); // 🔍 Debugging

        // Sélectionner l'élément où afficher les infos
        let resultDiv = document.getElementById('player-info');

        // Afficher les stats du joueur
        resultDiv.innerHTML = `
            <h2>📊 Stats de ${data.name} (${data.tag})</h2>
            <p>🏆 <strong>Trophées :</strong> ${data.trophies}</p>
            <p>🎖️ <strong>Niveau Exp :</strong> ${data.expLevel}</p>
            <p>🎮 <strong>Club :</strong> ${data.club?.name || "Aucun"}</p>
        `;

    } catch (error) {
        console.error("Erreur lors de la requête :", error);
        document.getElementById("player-info").innerHTML = `<p style="color:red;">❌ ${error.message}</p>`;
    }
}

// Permet d'appeler `fetchPlayer()` depuis le HTML
window.fetchPlayer = fetchPlayer;
