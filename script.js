const words = [
    "Cyberware", "Netrunning", "Datajack", "Cyberspace", "Virtual Reality (VR)", 
    "Augmented Reality (AR)", "Hacking", "Decking", "Cyberdeck", "ICE (Intrusion Countermeasures Electronics)", 
    "Black ICE", "Firewall", "Mesh Network", "Ghosting", "Cybercrime", "Cyberpunk", "Mega Corporation", 
    "Dystopia", "Street Samurai", "Hacker Collective", "Neuromancer", "Brain-Computer Interface (BCI)", 
    "Neural Implant", "Cyberpsychosis", "Transhumanism", "Techno-Dystopia", "Synthetics", "Nanotechnology", 
    "Biopunk", "Posthuman", "Body Modification", "Simstim", "Transgenderism", "Cybernetics", "Autonomous Vehicles", 
    "Virtual Currency", "Cryptocurrency", "Darknet", "Infovore", "Techno-Organic", "Genetic Engineering", 
    "Brain Hacking", "Corporate Espionage", "Surveillance State", "Neural Interface", "Brain Implant", "Mind Control", 
    "Street Doc", "Body Augmentation", "Corporate Domination", "Cybernetic Enhancement", "Transhuman", 
    "Digital Identity Theft", "Corporate Warfare", "Information Broker", "Memory Implant", "Virtual Addiction", 
    "Brainwashing", "Technological Singularity", "Techno-Utopia", "Cyber War", "Technological Surveillance", 
    "Hacktivism", "Reality Hacking", "Genetic Modification", "Mind Uploading", "Cybernetic Rebellion", 
    "Shadow Government", "Cybernetic Organism (Cyborg)", "Technological Totalitarianism", "Brain-to-Brain Interface", 
    "Memory Extraction", "Digital Democracy", "Technological Liberation", "Neuroplasticity", "Techno-Anarchy", 
    "Memory Erasure", "Reality Manipulation", "Technological Determinism", "Mind-Machine Interface"
];

const generateName = () => {
    const randomIndex1 = Math.floor(Math.random() * words.length);
    let randomIndex2 = Math.floor(Math.random() * words.length);
    while (randomIndex2 === randomIndex1) {
        randomIndex2 = Math.floor(Math.random() * words.length);
    }
    const name = words[randomIndex1] + " " + words[randomIndex2];
    document.getElementById("nameContainer").innerText = name;
};

document.getElementById("generateBtn").addEventListener("click", generateName);
