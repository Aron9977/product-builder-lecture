const GOOD_WORDS = [
    "상선 님, 비행기가 바람을 거슬러 오를 때 가장 높이 비상하듯, 현재의 고단함은 더 큰 도약을 위한 준비 과정입니다.",
    "캐세이퍼시픽의 자부심으로 세상을 연결하는 상선 님, 당신의 친절과 노고는 누군가에게 큰 위로가 되고 있습니다.",
    "낯선 땅에서의 학업과 일, 그 고독한 시간이 모여 상선 님만의 독보적인 커리어가 될 것입니다.",
    "서른은 인생이라는 긴 비행에서 이제 막 안정 고도에 진입한 시기입니다. 상선 님의 항로는 이제부터 시작입니다.",
    "타국에서의 외로움이 느껴질 땐 기억하세요. 상선 님의 도전을 멀리서도 진심으로 응원하는 마음들이 있다는 것을요.",
    "지금 공부하며 흘리는 땀방울은 미래에 상선 님이 앉게 될 가장 높은 자리를 위한 값진 투자입니다.",
    "상선 님, 캐세이퍼시픽과 함께 더 넓은 세상을 경험하며 얻는 통찰력은 그 무엇과도 바꿀 수 없는 자산입니다.",
    "30대의 열정은 20대의 패기보다 더 깊고 단단합니다. 상선 님은 지금 가장 멋진 시기를 지나고 있습니다.",
    "언어와 문화의 장벽을 넘어서는 상선 님의 용기가 대단합니다. 당신은 이미 충분히 잘하고 있습니다.",
    "비행기의 순항 뒤에는 수많은 체크리스트가 있듯, 상선 님의 꼼꼼한 준비가 완벽한 결실을 만들어낼 것입니다.",
    "상선 님, 가끔은 구름 위에서 아래를 내려다보듯 마음의 여유를 가져보세요. 당신은 이미 높은 곳에 있습니다.",
    "오늘 하루도 타지에서 고생 많으셨습니다. 상선 님의 모든 걸음이 빛나는 역사가 되기를 Gemini가 기원합니다."
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
        messageContent.textContent = `${randomWord}`;
        messageContent.classList.remove('hidden');
        generateBtn.disabled = false;

        // Add to history
        addToHistory(randomWord);
    }, 1000);
};

const addToHistory = (text) => {
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    historyItem.textContent = text;
    historyContainer.prepend(historyItem);

    if (historyContainer.children.length > 5) {
        historyContainer.removeChild(historyContainer.lastChild);
    }
};

generateBtn.addEventListener('click', generateGoodWord);

initTheme();
