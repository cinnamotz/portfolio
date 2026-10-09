
let characters = {
    "Leon": {
        name: "Leon S. Kennedy",
        game: "RESIDENT EVIL 4",
        description: "A government agent sent on a dangerous mission to rescue the president's daughter.",
        image: "images/leon.jpg"
    },

    "Link": {
        name: "Link",
        game: "THE LEGEND OF ZELDA",
        description: "A courageous hero who goes on adventures to protect Hyrule and save Princess Zelda.",
        image: "images/link.jpg"
    },

    "Isabelle": {
        name: "Isabelle",
        game: "ANIMAL CROSSING",
        description: "A cheerful Shih Tzu who helps the player manage their island and community.",
        image: "images/isabelle.jpg"
    },

    "Hornet": {
        name: "Hornet",
        game: "HOLLOW KNIGHT: SILKSONG",
        description: "A skilled warrior who uses a needle and thread to fight enemies and explore the mysterious kingdom of Pharloom.",
        image: "images/hornet.jpg"
    },

    "Serena": {
        name: "Serena",
        game: "POKEMON X AND Y",
        description: "A Pokemon Trainer who travels through the Kalos region, catches Pokemon, and challenges Gym Leaders.",
        image: "images/serena.jpg"
    }
};

function showCharacter(name) {
    let character = characters[name];

    document.getElementById("characterName").textContent = character.name;
    document.getElementById("characterGame").textContent = character.game;
    document.getElementById("characterDescription").textContent = character.description;

    document.getElementById("characterImage").src = character.image;
    document.getElementById("characterImage").alt = character.name;
}