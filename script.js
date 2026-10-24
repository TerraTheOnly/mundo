async function loadCharacters() {
    try {
        const response = await fetch("paises.json");

        if (!response.ok) {
            throw new Error("Could not load characters.json");
        }

        res = await response.json();
        return res;
    } catch (error) {
        console.error("Error loading characters:", error);
    }
}

const paises = await loadCharacters();