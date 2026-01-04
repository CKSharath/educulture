let selectedClasses = new Set();

function toggleClass(btn, num) {
    btn.classList.toggle('selected');
    selectedClasses.has(num)
        ? selectedClasses.delete(num)
        : selectedClasses.add(num);
}

/* NCERT-aligned Dummy Topic Database */
const ncertTopics = {
    "family": {
        1: "Draw your family members and write their names.",
        2: "Create a family tree using drawings or photos.",
        3: "Write 5 sentences about the roles of family members."
    },

    "plants": {
        1: "Identify and draw any two plants near your home.",
        2: "Classify plants into herbs, shrubs, and trees.",
        3: "Observe leaf shapes and group plants accordingly.",
        5: "Explain photosynthesis using a labeled diagram.",
        6: "Describe parts of a plant and their functions."
    },

    "water": {
        1: "List three daily uses of water.",
        2: "Draw different sources of water.",
        3: "Differentiate between clean and dirty water.",
        4: "Explain the water cycle with a neat diagram.",
        6: "Describe methods of conserving water."
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
                const activity =
                    ncertTopics[topic]?.[cls] ||
                    `<span style="color:#b91c1c; font-style:italic;">
                        This topic is not included in NCERT syllabus for Class ${cls}.
                     </span>`;

                output += `
                    <div class="result-item">
                        <strong>Class ${cls}</strong><br>
                        ${activity}
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
