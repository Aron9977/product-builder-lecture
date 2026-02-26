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
