🧠 Quiz App
An interactive multi-category quiz application built with React. Users can pick a topic (HTML, CSS, JavaScript, etc.), answer multiple-choice questions, track their progress in real time, and view their final score at the end.
🚀 Demo 
Add your live demo link here (e.g. Vercel / Netlify) once deployed.

✨ Features
🗂️ Multiple quiz categories (HTML, CSS, JavaScript...) with dynamic routing
✅ Instant answer feedback — correct/incorrect answers are highlighted with icons
📊 Progress bar showing how many questions have been answered
🏁 Result screen with final score and a "Play Again" option
🌗 Dark / Light mode toggle
📱 Responsive design
🔀 Client-side routing with React Router DOM (nested & dynamic routes)
🪝 Custom React hooks (useFetch) for clean data fetching logic
🛠️ Built With
React — UI library
React Router DOM — client-side routing
Vite — build tool & dev server
JSON Server — mock REST API for quiz data
CSS3 — custom styling, flexbox layouts
src/
├── assets/            # icons & images
├── hooks/
│   └── useFetch.jsx    # custom hook for fetching data
├── layouts/            # route layout components
├── pages/
│   ├── Home.jsx         # category selection page
│   ├── Quiz.jsx          # quiz page wrapper
│   ├── Test.jsx           # quiz logic & questions
│   ├── Result.jsx          # final score screen
│   └── ...
├── App.jsx             # routes configuration
└── main.jsx            # app entry point
