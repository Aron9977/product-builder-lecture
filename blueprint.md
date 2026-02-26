# Blueprint

## Overview

This project is a modern, responsive guestbook web application with support for light and dark modes. It allows users to submit messages and persists their theme preferences across sessions. Built with pure HTML, CSS, and JavaScript using modern Web Components.

## Project Outline

### Design and Style
*   **Layout:** Centered, responsive container with a modern, clean aesthetic.
*   **Theming:** Supports both Light and Dark modes using CSS variables for consistent styling.
*   **Typography:** Uses system-ui fonts for a native feel and high readability.
*   **Interactive Elements:** Smooth transitions for theme switching, hover effects on buttons, and elevated card styles for message entries.

### Features
*   **Theme Toggle:** A dedicated button to switch between light and dark modes.
*   **Theme Persistence:** Uses `localStorage` to remember the user's preferred theme.
*   **Guestbook Form:** Real-time message submission with immediate UI updates.
*   **Encapsulated Components:** Custom `<guestbook-entry>` Web Component for displaying messages.

## Implementation Details

### Theme Switcher
*   **CSS Variables:** Defined in `:root` and overridden in `.dark-theme`.
*   **Transition:** `body` has a `0.3s` transition on `background-color` and `color` for a smooth effect.
*   **Logic:** JavaScript toggles the `.dark-theme` class and updates `localStorage`.

### Guestbook Functionality
*   **Web Components:** Uses Shadow DOM to encapsulate message styles (inherited via variables).
*   **Event Handling:** Standard form submission prevention and dynamic element creation.

## Current History & Plan

### Initial Version
*   Basic guestbook functionality with message submission.

### Update: Theme Support
*   **Objective:** Add Dark/Light mode toggle and persistence.
*   **Steps:**
    1.  **Refactor CSS:** Move hardcoded colors to CSS variables and add `.dark-theme` definitions.
    2.  **Add UI:** Include a `🌓` toggle button in `index.html`.
    3.  **Implement Logic:** Add theme toggling and `localStorage` persistence in `main.js`.
    4.  **Update Blueprint:** Document the new architectural changes.
