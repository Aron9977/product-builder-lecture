const GOOD_WORDS = [
    "매일매일은 성장하고 빛날 수 있는 새로운 기회입니다.",
    "자신을 믿으세요. 그러면 당신을 막을 수 있는 것은 아무것도 없습니다.",
    "작은 진전이라도 그것은 여전히 전진입니다. 계속 나아가세요!",
    "당신의 잠재력은 무한합니다. 다른 이들의 말에 휘둘리지 마세요.",
    "친절은 누구나 베풀 수 있는 가장 값진 선물입니다.",
    "좋은 것에 집중하면, 더 좋은 일들이 찾아올 거예요.",
    "당신은 충분히 멋진 일을 해낼 능력이 있습니다.",
    "크게 꿈꾸고, 열심히 노력하며, 겸손함을 잃지 마세요.",
    "나무를 심기에 가장 좋은 시기는 20년 전이었지만, 두 번째로 좋은 시기는 바로 지금입니다.",
    "성공은 끝이 아니며 실패는 치명적이지 않습니다. 중요한 것은 계속 나아가는 용기입니다.",
    "당신의 유일한 한계는 당신의 마음속에 있습니다.",
    "긍정적인 에너지를 내뿜으세요. 세상이 그에 화답할 것입니다."
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
