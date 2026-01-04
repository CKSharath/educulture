let selectedClasses = new Set();

function toggleClass(btn, num) {
    btn.classList.toggle('selected');
    selectedClasses.has(num)
        ? selectedClasses.delete(num)
        : selectedClasses.add(num);
}

/* NCERT-aligned Dummy Topic Database */
const ncertTopics = {
    "energy": {
    2: {
        title: "Finding Energy at Home",
        subTopic: "Things that work using energy",
        assignmentTitle: "Energy Spotter Game",
        questions: [
            "Find and list 5 things at home that need energy to work (fan, bulb, phone, TV, mixer).",
            "Choose any one object from the list and draw it or paste its picture.",
            "Answer in one line: What happens if energy is not available for this object?"
        ],
        learning: [
            "Basic idea of energy",
            "Observation skills",
            "Linking objects to functionality"
        ]
    },

    4: {
        title: "Sources of Energy",
        subTopic: "Where does energy come from?",
        assignmentTitle: "Energy Sorting Challenge",
        questions: [
            "List any 6 different sources of energy.",
            "Divide the sources into two groups: Natural (sun, wind, water) and Man-made (battery, electricity).",
            "Color-code the groups or draw simple symbols to represent each source."
        ],
        learning: [
            "Classification skills",
            "Difference between natural and man-made sources",
            "Foundation understanding of renewable energy"
        ]
    },

    6: {
        title: "Energy Transformation",
        subTopic: "One form of energy changing into another",
        assignmentTitle: "Energy Journey Tracker",
        questions: [
            "Pick one device (fan, torch, or bicycle).",
            "Identify and write the input energy used by the device.",
            "Identify and write the output energy produced.",
            "Show the transformation using arrows (example: Electrical → Mechanical)."
        ],
        learning: [
            "Energy transformation",
            "Cause–effect relationships",
            "Conceptual clarity without formulas"
        ]
    },

    8: {
        title: "Renewable vs Non-Renewable Energy",
        subTopic: "Sustainable energy for the future",
        assignmentTitle: "Design a Future School",
        questions: [
            "Imagine a school that uses only renewable energy sources.",
            "List the energy sources you will use (solar, wind, water, etc.).",
            "Explain why these sources are better than non-renewable energy.",
            "Present your idea as a diagram, short paragraph, or bullet-point plan."
        ],
        learning: [
            "Sustainability concepts",
            "Decision-making skills",
            "Environmental responsibility"
        ]
    }
},


    "plants": {
        1: "Identify and draw any two plants near your home.",
        2: "Classify plants into herbs, shrubs, and trees.",
        3: "Observe leaf shapes and group plants accordingly.",
        5: "Explain photosynthesis using a labeled diagram.",
        6: "Describe parts of a plant and their functions."
    },

    "water": {
    2: {
        title: "Discovering Water Around Me",
        subTopic: "Where do we see water in our daily life?",
        assignmentTitle: "Water Detective at Home",
        questions: [
            "List 5 places where you used water in one day.",
            "Draw any one scene where water is used (brushing, bathing, cooking, watering plants).",
            "Circle and explain what happens if water is not available in that scene."
        ],
        learning: [
            "Importance of water",
            "Observation skills",
            "Basic cause–effect thinking"
        ]
    },

    3: {
        title: "Water Uses & Conservation",
        subTopic: "How water helps us and how we waste it",
        assignmentTitle: "Save the Water Mission",
        questions: [
            "Identify 3 ways water is wasted at home or school.",
            "Suggest 1 simple solution for each wastage.",
            "Create a small poster or slogan such as “Every Drop Counts!”"
        ],
        learning: [
            "Responsible usage",
            "Environmental awareness",
            "Expression and creativity"
        ]
    },

    4: {
        title: "Water Cycle & Real-Life Impact",
        subTopic: "Water cycle and its effect on rainfall",
        assignmentTitle: "Explain Today’s Rain",
        questions: [
            "Observe today’s weather conditions.",
            "Draw a simple water cycle diagram.",
            "Write 5 lines explaining evaporation → clouds → rain."
        ],
        learning: [
            "Scientific processes",
            "Linking theory to real life",
            "Logical explanation skills"
        ]
    },

    5: {
        title: "Water Scarcity & Sustainable Management",
        subTopic: "Water scarcity and conservation methods",
        assignmentTitle: "Mini Research: Water Crisis",
        questions: [
            "Choose one Indian city or village facing water scarcity.",
            "Why did the water problem occur?",
            "Suggest any 2 possible solutions."
        ],
        presentation: [
            "Short report",
            "3-slide PPT",
            "One-page write-up"
        ],
        learning: [
            "Analytical thinking",
            "Social responsibility",
            "Research & presentation skills"
        ]
    }
},


    "our country india": {
        3: "Identify national symbols of India.",
        4: "Locate India on the world map.",
        5: "Describe major physical features of India.",
        8: "Briefly explain the Indian freedom struggle.",
        10: "Analyze the growth of nationalism in India."
    },

    "light and shadows": {
        4: "Observe shadows at different times of the day.",
        5: "Create shadow puppets using a torch.",
        6: "Explain reflection using everyday examples.",
        8: "Describe laws of reflection with diagrams."
    }
};

function generateTask() {
    const topicInput = document.getElementById('topicInput');
    const topic = topicInput.value.trim().toLowerCase();

    if (selectedClasses.size === 0) {
        alert("Please select at least one class.");
        return;
    }

    if (!topic) {
        alert("Please enter a topic.");
        return;
    }

    const loading = document.getElementById('loadingSection');
    const result = document.getElementById('resultSection');
    const content = document.getElementById('resContent');

    result.classList.add('hidden');
    loading.classList.remove('hidden');

    setTimeout(() => {
        loading.classList.add('hidden');

        let output = `<h4>Lesson Topic: ${topicInput.value}</h4>`;

        Array.from(selectedClasses)
    .sort((a, b) => a - b)
    .forEach(cls => {

        const data = ncertTopics[topic]?.[cls];

        if (!data) {
            output += `
                <div class="result-item">
                    <strong>Class ${cls}</strong><br>
                    <span class="not-available">
                        This topic is not included in NCERT syllabus for Class ${cls}.
                    </span>
                </div>
            `;
            return;
        }

        output += `
            <div class="result-item">
                <strong>Grade ${cls} – ${data.title}</strong><br><br>

                <em><b>Sub-topic:</b> ${data.subTopic}</em><br><br>

                <b>Assignment:</b> "${data.assignmentTitle}"<br><br>

                <ul>
                    ${data.questions.map(q => `<li>${q}</li>`).join("")}
                </ul>

                ${
                    data.presentation
                        ? `<b>Present as:</b>
                           <ul>${data.presentation.map(p => `<li>${p}</li>`).join("")}</ul>`
                        : ""
                }

                <b>What the student learns:</b>
                <ul>
                    ${data.learning.map(l => `<li>${l}</li>`).join("")}
                </ul>
            </div>
        `;
    });


        content.innerHTML = output;
        result.classList.remove('hidden');
    }, 2200);
}
// Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    document.querySelector('.theme-toggle').textContent =
        isDark ? '☀️' : '🌙';
}

// Load saved theme
(function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        document.addEventListener('DOMContentLoaded', () => {
            const btn = document.querySelector('.theme-toggle');
            if (btn) btn.textContent = '☀️';
        });
    }
})();
