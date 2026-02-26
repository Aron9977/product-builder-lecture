# Blueprint

## Overview

This project is a simple guestbook web application. Users can submit messages which are then displayed on the page. It is built using HTML, CSS, and JavaScript, and it leverages modern web standards like Web Components for modularity.

## Project Outline

### Design and Style
*   **Layout:** A centered layout with a heading, an input form, and a list of submitted messages.
*   **Color Palette:** A clean and modern color scheme with a focus on readability.
*   **Typography:** Clear and legible fonts.
*   **Effects:** Subtle shadow effects on the input form, button, and message entries to create a sense of depth.

### Features
*   **Guestbook Form:** An input field and a button for users to submit their messages.
*   **Message Display:** Submitted messages are displayed in a list.
*   **Web Components:** Each message in the guestbook is a Web Component (`<guestbook-entry>`) for encapsulation and reusability.

## Current Plan

*   **Objective:** Add a guestbook feature to allow users to type and submit their own messages.
*   **Steps:**
    1.  **Modify `blueprint.md`:** Update the project overview and plan to reflect the new guestbook functionality.
    2.  **Modify `index.html`:** Replace the quote display with a guestbook form (input field and submit button) and a container for the messages.
    3.  **Modify `style.css`:** Add styles for the guestbook form, input field, submit button, and the list of messages.
    4.  **Modify `main.js`:**
        *   Remove the random quote generator logic.
        *   Create a new Web Component (`<guestbook-entry>`) to display individual guestbook messages.
        *   Add an event listener to the form to handle message submission.
        *   When a message is submitted, create a new `<guestbook-entry>` element and append it to the message list.
