const words = [
    
    "Nano-Medic",
    "Virtual Reality Architect",
    "Quantum Data Analyst",
    "Biohacker Chef",
    "Space Tourism Guide",
    "Cybernetic Therapist",
    "Asteroid Miner",
    "Exosuit Designer",
    "Mind Interface Engineer",
    "Genetic Memory Curator",
    "Virtual Fashion Designer",
    "Augmented Reality Archaeologist",
    "Energy Harvesting Technician",
    "Lunar Tour Operator",
    "Robotic Performance Artist",
    "Neural Network Trainer",
    "Quantum Botanist",
    "Teleportation Coordinator",
    "Gravity Wave Surfer",
    "Holographic Event Planner",
    "Anti-Gravity Architect",
    "Neuroplasticity Coach",
    "Climate Engineering Consultant",
    "3D Printed Organ Technician",
    "AI Ethics Consultant",
    "Time Travel Historian",
    "Cybernetic Limb Stylist",
    "Genetic Counselor for Pets",
    "AI Companion Trainer",
    "Space Junk Collector",
    "Transhumanist Philosopher",
    "Nanobot Artist",
    "Cryogenic Sleep Counselor",
    "Digital Afterlife Manager",
    "Neural Implant Technician",
    "Bioluminescence Designer",
    "Quantum Cryptographer",
    "Neuroenhancement Coach",
    "Space Elevator Operator",
    "Biofabrication Specialist",
    "Virtual Reality Filmmaker",
    "Quantum Reality Theorist",
    "Telepathic Translator",
    "Space Debris Sculptor",
    "AI Fashion Stylist",
    "Mind Uploading Technician",
    "Nanobot Sculptor",
    "Telepathic Communicator",
    "Neural Network Artist",
    "Time Travel Consultant",
    "Genetic Memory Stylist",
    "AI Personal Trainer",
    "Quantum Reality Painter",
    "Neuroenhancement Consultant",
    "Holographic Fashion Designer",
    "Space Elevator Designer",
    "Bioluminescent Gardener",
    "Virtual Reality Teacher",
    "Quantum Cryptocurrency Trader",
    "Mind Uploading Engineer",
    "Nanotechnology Fashion Designer",
    "AI Fashion Model",
    "Asteroid Mining Consultant",
    "Quantum Reality Filmmaker",
    "Cryogenic Sleep Artist",
    "Teleportation Artist",
    "AI Relationship Counselor",
    "Holographic Interior Designer",
    "Virtual Reality Personal Shopper",
    "Quantum Data Scientist",
    "Nanobot Engineer",
    "Space Tourism Blogger",
    "Mind Interface Designer",
    "Neural Implant Artist",
    "Genetic Memory Architect",
    "Exosuit Fashion Designer",
    "Telepathic Therapist",
    "Quantum Reality Composer",
    "AI Life Designer",
    "Cryogenics Counselor",
    "Biomechanical Artist",
    "Virtual Reality Landscape Designer",
    "Quantum Reality Illustrator",
    "Time Travel Architect",
    "AI Meditation Guide",
    "Telepathic Artist",
    "Holographic Musician",
    "Quantum Entanglement Designer",
    "Space Tourism Consultant",
    "Virtual Reality Trainer",
    "Cryogenic Sleep Consultant",
    "Nanobot Architect",
    "AI Fashion Consultant",
    "Mind Interface Stylist",
    "Neural Network Therapist",
    "Genetic Memory Designer",
    "Quantum Cryptography Artist",
    "Bioluminescent Designer",
    "Space Elevator Engineer",
    "Virtual Reality Architect",
    "Quantum Reality Engineer",
    "Nanotechnology Consultant",
    "AI Life Architect",
    "Cryogenics Engineer",
    "Biomechanical Engineer",
    "Telepathic Communicator",
    "Holographic Artist",
    "Quantum Reality Designer",
    "Space Tourism Photographer",
    "Virtual Reality Teacher",
    "Robot Therapist",
    "DJ Butcher",
    "AI Cornocopia Designer",
    "AI House Designer",
    "Food Delivery Drone Pilot"
];



document.addEventListener('DOMContentLoaded', function () {
    const backgroundAudio = document.getElementById('backgroundAudio');
    const generateBtn = document.getElementById('generateBtn');
    const nameContainer = document.getElementById('nameContainer');

    // Start playing the audio when the document is ready
    backgroundAudio.play().then(() => {}).catch(error => {
        console.error('Error playing audio:', error);
    });

    const generateName = () => {
        const selectedIndices = [];
        while (selectedIndices.length < 1) {
            const randomIndex = Math.floor(Math.random() * words.length);
            if (!selectedIndices.includes(randomIndex)) {
                selectedIndices.push(randomIndex);
            }
        }

        const name = words[selectedIndices[0]]; // Remove + " " + words[selectedIndices[1]] if you want to generate only one word
        nameContainer.innerText = name;
    };

    generateBtn.addEventListener("click", generateName);
});

