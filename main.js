const GOOD_WORDS = [
    "Every day is a new opportunity to grow and shine.",
    "Believe in yourself, and you will be unstoppable.",
    "Small progress is still progress. Keep going!",
    "Your potential is limitless; don't let anyone tell you otherwise.",
    "Kindness is a gift that everyone can afford to give.",
    "Focus on the good, and the good will get better.",
    "You are capable of amazing things.",
    "Dream big, work hard, and stay humble.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Your only limit is your mind.",
    "Radiate positivity and the world will respond in kind."
];

const themeToggle = document.getElementById('theme-toggle');
const generateBtn = document.getElementById('generate-btn');
const messageDisplay = document.getElementById('message-display');
const messageContent = document.getElementById('message-content');
const loadingSpinner = document.getElementById('loading-spinner');
const historyContainer = document.getElementById('history-container');

// Theme Logic
const initTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
};

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

// Generator Logic
const generateGoodWord = () => {
    // UI Feedback
    generateBtn.disabled = true;
    messageDisplay.classList.remove('hidden');
    messageContent.classList.add('hidden');
    loadingSpinner.classList.remove('hidden');

    // Simulate "Gemini 3.1" AI Processing Delay
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * GOOD_WORDS.length);
        const randomWord = GOOD_WORDS[randomIndex];

        // Update UI
        loadingSpinner.classList.add('hidden');
        messageContent.textContent = `"${randomWord}"`;
        messageContent.classList.remove('hidden');
        generateBtn.disabled = false;

        // Add to history
        addToHistory(randomWord);
    }, 800);
};

const addToHistory = (text) => {
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    historyItem.textContent = text;
    historyContainer.prepend(historyItem);

    // Keep history manageable
    if (historyContainer.children.length > 5) {
        historyContainer.removeChild(historyContainer.lastChild);
    }
};

generateBtn.addEventListener('click', generateGoodWord);

// Initialize
initTheme();
