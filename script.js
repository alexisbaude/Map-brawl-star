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
                'Authorization': 'Bearer TON_TOKEN_ICI',  // Remplace par ton token API
                'Accept': 'application/json'
            }
        });

        // Vérifier si la réponse est OK
        if (!response.ok) {
            throw new Error(`Erreur API: ${response.status} - ${response.statusText}`);
        }

        // Convertir en JSON
        const data = await response.json();
        console.log("Données du joueur :", data);

        // Afficher les infos dans la pa
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
                'Authorization': 'Bearer TON_TOKEN_ICI',  // Remplace par ton token API
                'Accept': 'application/json'
            }
        });

        // Vérifier si la réponse est OK
        if (!response.ok) {
            throw new Error(`Erreur API: ${response.status} - ${response.statusText}`);
        }

        // Convertir en JSON
        const data = await response.json();
        console.log("Données du joueur :", data);

        // Afficher les infos dans la pa
