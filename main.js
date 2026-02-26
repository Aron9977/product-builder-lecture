class GuestbookEntry extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const wrapper = document.createElement('div');
        const message = document.createElement('p');
        message.textContent = this.getAttribute('message');
        wrapper.appendChild(message);
        shadow.appendChild(wrapper);
    }
}

customElements.define('guestbook-entry', GuestbookEntry);

const form = document.getElementById('guestbook-form');
const messageContainer = document.getElementById('message-container');
const messageInput = document.getElementById('message-input');
const themeToggle = document.getElementById('theme-toggle');

// Theme Logic
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    let theme = 'light';
    if (document.body.classList.contains('dark-theme')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    if (message) {
        const newEntry = document.createElement('guestbook-entry');
        newEntry.setAttribute('message', message);
        messageContainer.appendChild(newEntry);
        messageInput.value = '';
    }
});
