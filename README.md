# React Project README

## Overview

This React application is designed with a focus on dynamic routing, responsive design, and user-centric features including a sidebar and dynamic navbar. It includes a sidebar, a dynamic navbar, a dashboard for tasks/courses, mentors page, and detailed task views.

---

## Preview

![Task Management App Preview](./assets/preview.png)

*Screenshot of the main dashboard with sidebar, navbar, and responsive layout.*

## Features

### Responsive Layout & Navigation

- Sidebar visible on desktop, collapses on mobile.
- Main content area adjusts based on sidebar presence.
- Mobile-friendly toggles for menu visibility.

### Sidebar Navigation

- Navigation links to main sections: Overview, Tasks, Mentors, Messages, Settings.
- Active link highlighting.
- Icons beside link names for visual clarity.
- Collapses or hides on smaller screens for better UX.

### Dynamic Navbar

- Uses React Router's `useLocation` to determine current page.
- Displays dynamic page titles including support for dynamic routes like `/tasks/:id`.
- Shows user avatar and notification icon.
- Mobile and desktop variant layouts.

### Task and Mentor Pages

- **Dashboard (Tasks) Page**: Lists tasks retrieved from backend API.
- **Mentors Page**: Lists mentors with avatars, roles, bios, ratings.
- Responsive grid layout adapting to screen size.

### Styling & UX

- Tailwind CSS for all styling enabling rapid responsive layout creation.
- Scrollbars optionally hidden using custom classes or Tailwind utilities.
- Dynamic class assignment in React optimized with template literals and `classnames` utility.
- Hover and active states customization.
- Responsive designs for mobile, tablet, and desktop.

### Routing

- React Router v6 used for client-side routing.
- Routes configured for dashboard, mentors list, task details (`/tasks/:id`).
- 404 fallback for unmatched routes.
- Nested routes support shared layout components (Sidebar, Navbar).

### Accessibility & UX

- Proper aria labels on interactive elements.
- Keyboard navigation support.
- Semantic HTML tags for better screen reader experience.

---

## Setup & Installation

1. **Clone the repository**
```bash
git clone https://github.com/Praneeth76/Task-Management.git
cd Task-Management.git
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm start
```
The app will run locally at [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── components/      # Reusable UI components (Sidebar, Navbar, etc.)
├── pages/           # Main pages (Dashboard, Mentors, TaskDetails)
├── routes/          # Route definitions
├── assets/          # Images, icons, etc.
├── utils/           # Utility functions
├── App.js           # Root component
└── index.js         # Entry point
```

---

## Customization

- **Styling**: Modify Tailwind config in `tailwind.config.js` for custom themes.
- **Routes**: Add or edit routes in `src/routes/`.
- **API Integration**: Update API endpoints in relevant page components.

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes.
4. Push to your fork and open a pull request.

---

## License

This project is licensed under the MIT License.
