
let people = {
    zelda: {
        name: "Princess Zelda",
        role: "Princess of Hyrule",
        image: "casefile-images/zelda.jpg",
        description: "Zelda researches ancient technology and struggles to awaken her sealing power. During the Great Calamity, she uses that power to contain Ganon."
    },

    link: {
        name: "Link",
        role: "Royal Knight and Chosen Hero",
        image: "casefile-images/link.jpg",
        description: "Link is chosen to protect Princess Zelda. He fights Ganon's forces, is gravely injured during the Great Calamity, and awakens one hundred years later to continue his mission."
    },

    rhoam: {
        name: "King Rhoam",
        role: "King of Hyrule",
        image: "casefile-images/rhoam.jpg",
        description: "Zelda's father oversees the kingdom's preparations for Ganon's return. He supports the discovery of ancient technology and the organization of Hyrule's defenses."
    },

    impa: {
        name: "Impa",
        role: "Sheikah Elder and Advisor",
        image: "casefile-images/impa.jpg",
        description: "Impa serves the royal family and preserves knowledge of the Great Calamity. One hundred years later, she helps Link understand the past and guides him toward recovering his lost memories."
    },

    mipha: {
        name: "Mipha",
        role: "Zora Champion",
        image: "casefile-images/mipha.jpg",
        description: "Mipha is the Zora princess and the Champion who pilots Divine Beast Vah Ruta. Known for her healing abilities, she is a childhood friend of Link. She is defeated when Ganon takes control of her Divine Beast."
    },

    daruk: {
        name: "Daruk",
        role: "Goron Champion",
        image: "casefile-images/daruk.jpg",
        description: "Daruk is a powerful Goron warrior who pilots Divine Beast Vah Rudania. Known for his courage and protective ability, he fights to defend Hyrule but is defeated during the Great Calamity."
    },

    revali: {
        name: "Revali",
        role: "Rito Champion",
        image: "casefile-images/revali.jpg",
        description: "Revali is a skilled Rito archer who pilots Divine Beast Vah Medoh. His exceptional archery and ability to create powerful updrafts make him a valuable defender of Hyrule."
    },

    urbosa: {
        name: "Urbosa",
        role: "Gerudo Champion",
        image: "casefile-images/urbosa.jpg",
        description: "Urbosa is the Gerudo chief and the pilot of Divine Beast Vah Naboris. She is a formidable warrior and a trusted ally of Zelda who fights against Ganon during the Great Calamity."
    },

    ganon: {
        name: "Calamity Ganon",
        role: "Primary Antagonist",
        image: "casefile-images/ganon.jpg",
        description: "An ancient evil that returns to Hyrule and corrupts the Guardians and Divine Beasts, causing widespread destruction and defeating the Champions."
    }
};



let evidence = {
    guardians: {
        name: "Guardian Machines",
        type: "Ancient Technology",
        classification: "Physical Evidence",
        description: "The Guardians were created to help defend Hyrule. During the Great Calamity, Ganon corrupts them and turns their weapons against the kingdom.",
        significance: "Their corruption demonstrates how Hyrule's own defenses became a weakness."
    },

    divineBeasts: {
        name: "The Divine Beasts",
        type: "Strategic Weapons",
        classification: "Physical Evidence",
        description: "Four enormous ancient machines are piloted by Hyrule's Champions. Ganon corrupts the Divine Beasts, defeating the Champions and removing a major part of Hyrule's defense.",
        significance: "Their capture leaves Hyrule without its strongest strategic defenses."
    },

    slate: {
        name: "The Sheikah Slate",
        type: "Ancient Artifact",
        classification: "Artifact",
        description: "The Sheikah Slate is a device used to access ancient technology. Link uses it to explore ruins, solve puzzles, and uncover information about Hyrule's past.",
        significance: "It provides Link with tools and information to investigate Hyrule's history."
    },

    memories: {
        name: "Lost Memories",
        type: "Historical Records",
        classification: "Witness Testimony",
        description: "Link gradually recovers memories of the people and events surrounding the Great Calamity. These memories help reconstruct what happened before the kingdom fell.",
        significance: "They help piece together the events leading up to and during the Calamity."
    }
};


let timeline = {
    preparation: {
        title: "1. Preparation for Ganon's Return",
        date: "Before the Great Calamity",
        description: "Hyrule discovers ancient technology and prepares for Ganon's return. Zelda studies the technology while the four Champions are selected to pilot the Divine Beasts."
    },

    calamity: {
        title: "2. The Great Calamity",
        date: "Approximately 100 years before the main adventure",
        description: "Calamity Ganon returns and corrupts the Guardians and Divine Beasts. Hyrule Castle falls, the Champions are defeated, and the kingdom suffers devastating losses."
    },

    sacrifice: {
        title: "3. Zelda's Resistance",
        date: "During the Great Calamity",
        description: "After Link is gravely injured, Zelda's sealing power awakens. She confronts Ganon and works to contain him while Link is taken to the Shrine of Resurrection."
    },

    awakening: {
        title: "4. Link Awakens",
        date: "100 years after the Calamity",
        description: "Link awakens with little memory of his past. Guided by Zelda and others, he explores Hyrule, recovers his memories, and works to defeat Ganon."
    },

    conclusion: {
        title: "5. The Final Confrontation",
        date: "The conclusion of Breath of the Wild",
        description: "Link confronts Calamity Ganon at Hyrule Castle. With Zelda's help, he defeats Ganon and brings the long struggle to an end."
    }
};


let witnesses = {
    zelda: {
        name: "Zelda's Perspective",
        description: "Zelda's recovered memories show her frustration at being unable to awaken her power, her interest in ancient technology, and her determination to protect Link and Hyrule."
    },

    impa: {
        name: "Impa's Account",
        description: "Impa preserves the history of the Great Calamity and explains the importance of Link's lost memories. Her account helps connect the events of the past to Link's present mission."
    },

    diary: {
        name: "Royal Records",
        description: "Zelda's research notes and diary entries provide insight into her studies, her relationship with her father, and her efforts to discover her sacred power."
    },

    champions: {
        name: "The Champions",
        description: "The stories and memories associated with Mipha, Daruk, Revali, and Urbosa reveal their individual contributions to Hyrule's defense and the consequences of Ganon's control over the Divine Beasts."
    }
};


// Display a selected person's information and portrait

function showPerson(personKey) {
    let person = people[personKey];

    document.getElementById("personDetails").innerHTML =
        '<img class="person-portrait" src="' + person.image +
        '" alt="' + person.name + '">' +
        '<div id="person-info">' +
        "<h3>" + person.name + "</h3>" +
        "<p><strong>Role:</strong> " + person.role + "</p>" +
        "<p>" + person.description + "</p>" +
        "</div>";
}


// Display a selected evidence item's information


function showEvidence(evidenceKey) {
    let item = evidence[evidenceKey];

    let classificationClass = "";

    if (item.classification === "Physical Evidence") {
        classificationClass = "physical-evidence";
    } else if (item.classification === "Artifact") {
        classificationClass = "artifact-evidence";
    } else if (item.classification === "Witness Testimony") {
        classificationClass = "witness-evidence";
    }

    document.getElementById("evidenceDetails").innerHTML =
        "<h3>" + item.name + "</h3>" +
        "<p><strong>Type:</strong> " + item.type + "</p>" +
        "<p><strong>Classification:</strong> " +
        '<span class="' + classificationClass + '">' +
        item.classification + "</span></p>" +
        "<p><strong>Description:</strong> " +
        item.description + "</p>" +
        "<p><strong>Significance:</strong> " +
        item.significance + "</p>";
}


// Display a selected timeline event
function showTimeline(eventKey) {
    let event = timeline[eventKey];

    document.getElementById("timelineDetails").innerHTML =
        "<h3>" + event.title + "</h3>" +
        "<p><strong>Time:</strong> " + event.date + "</p>" +
        "<p>" + event.description + "</p>";
}


// Display a selected witness account
function showWitness(witnessKey) {
    let witness = witnesses[witnessKey];

    document.getElementById("witnessDetails").innerHTML =
        "<h3>" + witness.name + "</h3>" +
        "<p>" + witness.description + "</p>";
}


// Create timeline buttons using the timeline object
function createTimelineButtons() {
    let timelineButtons = document.getElementById("timelineButtons");

    for (let eventKey in timeline) {
        let button = document.createElement("button");

        button.textContent = timeline[eventKey].title;

        button.onclick = function () {
            showTimeline(eventKey);
        };

        timelineButtons.appendChild(button);
    }
}


// Create the timeline buttons when the page loads
createTimelineButtons();