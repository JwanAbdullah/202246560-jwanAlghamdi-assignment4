# Technical Documentation – Assignment 3

## 1. Overview

This project is an advanced version of the personal portfolio developed in Assignments 1 and 2.

It is built using React and Vite, with a focus on implementing advanced functionality such as API integration, complex logic, state management, and performance optimization.

The application showcases personal information, experience, projects, and skills through modular components, while providing dynamic and interactive features.

---

## 2. Technologies Used

- React (Functional Components & Hooks)
- Vite (Build tool and development server)
- JavaScript (ES6+)
- CSS (Flexbox, Grid, Transitions)
- GitHub API (data fetching)
- LocalStorage (state persistence)

---

## 3. Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── GithubRepos.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
│
├── assets/
│   └── images/
│       ├── aic.png
│       ├── kfupm-gpt.png
│       ├── kommute.png
│       ├── sage.png
│       └── reserve.png
│
├── App.jsx
├── App.css
└── main.jsx
```

- `main.jsx` initializes the application
- `App.jsx` renders all sections
- `components/` contains modular UI sections
- `GithubRepos.jsx` handles API integration
- `App.css` contains global styling and themes



---


## 4. Components Architecture

- **Navbar** – Navigation and theme toggle
- **About** – Personal introduction and visitor state
- **Experience** – Displays experience dynamically
- **Projects** – Includes filtering and sorting logic
- **GithubRepos** – Fetches and displays API data
- **Skills** – Displays skills with visual indicators
- **Contact** – Form with user interaction
- **Footer** – Additional links and information

Components are reusable and structured for maintainability.

---

## 5. API Integration

The application integrates the GitHub API to fetch repositories dynamically.

- Uses `fetch()` to retrieve repository data
- Displays latest repositories in the UI
- Includes loading and error handling states

This ensures the content remains dynamic and up-to-date.

---

## 6. Complex Logic

The Projects section implements filtering and sorting logic:

- Users can filter projects by category (AI, Web, Desktop)
- Users can sort projects by name or year
- Logic combines multiple conditions and updates UI dynamically

`useMemo` is used to optimize performance by recalculating data only when dependencies change.

---

## 7. State Management

State is managed using React hooks:

- `useState` for user selections (filtering, sorting, theme)
- `useEffect` for loading persistent data
- `localStorage` to store:
  - theme preference

This ensures data persistence and dynamic updates.

---

## 8. Performance Optimization

The application includes several performance improvements:

- Optimized image sizes for faster loading
- Removed unused code and redundant styles

Performance was tested using browser tools such as Lighthouse.

---

## 9. User Interaction

The application includes interactive features:

- Theme toggle with persistent state
- Project filtering and sorting controls
- Dynamic GitHub data display
- Contact form interaction

These features improve usability and responsiveness.

---

## 10. Error Handling & Feedback

- API errors are handled with fallback messages
- Loading states inform the user during data fetching
- Contact form provides success feedback
- Input validation prevents incorrect data submission

---

## 11. Improvements from Assignment 2

- Added GitHub API integration
- Implemented filtering and sorting logic
- Improved state management with persistent data
- Enhanced performance and loading behavior
- Refined UI and user experience

---

## 12. Limitations

- API usage is limited to GitHub
- Some features are simplified for demonstration purposes

---

## 13. Future Improvements

- Connect contact form to a backend service
- Add search functionality for projects
- Improve accessibility (ARIA, keyboard navigation)
- Add more advanced API integrations
- Enhance UI animations and responsiveness
