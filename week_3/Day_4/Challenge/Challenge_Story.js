document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("libform");
    const storySpan = document.getElementById("story");
    
    // Liste des histoires possibles
    const stories = [
        "{person} était un {adjective} aventurier qui aimait {verb} au {place}. Un jour, il trouva un {noun} magique !",
        "Dans la ville de {place}, {person} découvrit un {noun} ancien qui pouvait {verb} avec une puissance {adjective} !",
        "Un jour, {person} a décidé de {verb} avec un {noun} au {place}, ce qui a changé sa vie de manière {adjective} !"
    ];

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const noun = document.getElementById("noun").value.trim();
        const adjective = document.getElementById("adjective").value.trim();
        const person = document.getElementById("person").value.trim();
        const verb = document.getElementById("verb").value.trim();
        const place = document.getElementById("place").value.trim();

        // Vérification que tous les champs sont remplis
        if (!noun || !adjective || !person || !verb || !place) {
            alert("Tous les champs doivent être remplis !");
            return;
        }

        // Choisir une histoire aléatoire et remplacer les mots-clés
        const randomStory = stories[Math.floor(Math.random() * stories.length)];
        const finalStory = randomStory
            .replace("{noun}", noun)
            .replace("{adjective}", adjective)
            .replace("{person}", person)
            .replace("{verb}", verb)
            .replace("{place}", place);

        storySpan.textContent = finalStory;
    });

    // Ajouter un bouton "Shuffle" pour changer l'histoire
    const shuffleButton = document.createElement("button");
    shuffleButton.textContent = "Shuffle Story";
    shuffleButton.style.marginLeft = "10px";
    form.appendChild(shuffleButton);

    shuffleButton.addEventListener("click", (event) => {
        event.preventDefault();

        if (!storySpan.textContent) {
            alert("Veuillez d'abord générer une histoire !");
            return;
        }

        // Générer une nouvelle histoire avec les mêmes valeurs entrées
        const noun = document.getElementById("noun").value.trim();
        const adjective = document.getElementById("adjective").value.trim();
        const person = document.getElementById("person").value.trim();
        const verb = document.getElementById("verb").value.trim();
        const place = document.getElementById("place").value.trim();

        const randomStory = stories[Math.floor(Math.random() * stories.length)];
        const finalStory = randomStory
            .replace("{noun}", noun)
            .replace("{adjective}", adjective)
            .replace("{person}", person)
            .replace("{verb}", verb)
            .replace("{place}", place);

        storySpan.textContent = finalStory;
    });
});
