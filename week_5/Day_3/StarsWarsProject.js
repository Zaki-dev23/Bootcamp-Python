let btn = document.querySelector('.btn');

btn.addEventListener('click', async () => {
    const randomId = Math.floor(Math.random() * 83) + 1; // Valid character IDs: 1 to 83
    const url = `https://www.swapi.tech/api/people/${randomId}`;

    // Show loading message
    document.getElementById("loading-spinner").style.display = "inline-block";
    document.getElementById("loading-text").textContent = "Loading...";
    const clearDiv = document.querySelector('.displayNone');
    clearDiv.style.display = 'none'


    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
        const char = data.result.properties;

        document.getElementById("name").textContent = `Name: ${char.name}`;
        document.getElementById("height").textContent = `Height: ${char.height}`;
        document.getElementById("gender").textContent = `Gender: ${char.gender}`;
        document.getElementById("birth").textContent = `Birth Year: ${char.birth_year}`;

        // Get homeworld name
        const homeworldResponse = await fetch(char.homeworld);
        const homeworldData = await homeworldResponse.json();
        document.getElementById("homeworld").textContent = `Homeworld: ${homeworldData.result.properties.name}`;

        // Clear loading message
        document.getElementById("loading-text").textContent = "";
        clearDiv.style.display = 'inline'

    } catch (error) {
        console.error('Error:', error);

        const clearDiv = document.querySelector('.character-container');
        clearDiv.style.display = 'none'

        document.getElementById("loading-text").textContent = 'Oh no! That person isn’t available.';
        document.getElementById("loading-text").className = 'character-container';
    } finally {
        document.getElementById("loading-spinner").style.display = "none";
    }
});

