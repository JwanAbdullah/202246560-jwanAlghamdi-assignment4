# 📄 Technical Documentation – Assignment 4

## 1. Overview

This project is a **complete personal web application** developed as part of Assignment 4.

It builds upon previous assignments and integrates all concepts into a **fully functional, responsive, and deployable portfolio website**.

The application is built using React and Vite, focusing on:

- Dynamic content rendering  
- API integration  
- State management  
- Performance optimization  
- Deployment using GitHub Pages  

The goal is to deliver a **professional, production-ready web application**.

---

## 2. Technologies Used

- React (Functional Components & Hooks)  
- Vite (Build tool and development server)  
- JavaScript (ES6+)  
- CSS (Flexbox, Grid, Transitions)  
- GitHub API (data fetching)  
- LocalStorage (state persistence)  
- GitHub Actions (deployment automation)  

---

## 3. Project Structure

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
    │
    ├── App.jsx
    ├── App.css
    └── main.jsx

    docs/
    ├── ai-usage-report.md
    └── technical-documentation.md

    presentation/
    ├── slides.pdf
    └── demo-video.mp4

    .github/
    └── workflows/
        └── deploy.yml

    README.md




### Explanation

- `main.jsx` → Entry point of the application  
- `App.jsx` → Main layout that renders all sections  
- `components/` → Modular UI sections  
- `GithubRepos.jsx` → Handles API integration  
- `.github/workflows/` → Automates deployment to GitHub Pages  

---

## 4. Components Architecture

The application is structured into reusable components:

- **Navbar** – Navigation menu and theme toggle  
- **About** – Personal introduction  
- **Experience** – Displays experience dynamically  
- **Projects** – Handles filtering and sorting logic  
- **GithubRepos** – Fetches and displays GitHub data  
- **Skills** – Visual representation of skills  
- **Contact** – User interaction form  
- **Footer** – Additional information and links  

This modular structure improves maintainability and scalability.

---

## 5. API Integration

The application integrates the **GitHub API** to fetch repository data dynamically.

- Uses `fetch()` for asynchronous requests  
- Displays repository information in real time  
- Includes loading and error handling states  

This ensures content stays updated without manual changes.

---

## 6. Complex Logic

The Projects section includes dynamic logic:

- Filter projects by category (AI, Web, Desktop)  
- Sort projects by name or year  
- Combine multiple conditions for dynamic updates  

`useMemo` is used to optimize rendering and avoid unnecessary recalculations.

---

## 7. State Management

State is managed using React hooks:

- `useState` → user interactions (filters, theme, sorting)  
- `useEffect` → lifecycle events and data loading  
- `localStorage` → persistent theme preference  

This ensures smooth interaction and consistent user experience.

---

## 8. Performance Optimization

Performance improvements include:

- Optimized image sizes  
- Removal of unused code  
- Efficient rendering using React hooks  

Performance testing was done using browser tools such as Lighthouse.

---

## 9. User Interaction

Interactive features include:

- Dark/Light mode toggle  
- Project filtering and sorting  
- Dynamic GitHub data display  
- Contact form interaction  

These features improve usability and engagement.

---

## 10. Error Handling & Feedback

The application handles errors and user feedback effectively:

- API errors show fallback messages  
- Loading indicators improve user experience  
- Form validation prevents incorrect input  

---

## 11. Deployment

The application is deployed using **GitHub Pages with GitHub Actions**.

### Deployment Process

1. Code is pushed to the `main` branch  
2. GitHub Actions workflow runs automatically  
3. The project is built using `npm run build`  
4. The `dist/` folder is deployed to GitHub Pages  

### Live Application

👉 https://jwanabdullah.github.io/202246560-jwanAlghamdi-assignment4/

---

## 12. Improvements from Previous Assignments

- Integrated API for dynamic content  
- Added advanced filtering and sorting  
- Improved state management  
- Implemented automated deployment  
- Enhanced UI and responsiveness  

---

## 13. Limitations

- API usage is limited to GitHub  
- Contact form is not connected to a backend  
- Some features are simplified for demonstration  

---

## 14. Future Improvements

- Connect contact form to a backend service  
- Add project search functionality  
- Improve accessibility (ARIA, keyboard navigation)  
- Enhance animations and UI interactions  
- Integrate additional APIs  