# Tracksmith Frontend

A React + Vite + Tailwind app for planning personalized running routes.

## 🧑‍💻 Contributing

### Requirements

- Node.js (v20+ recommended)
- npm (or `pnpm`, `yarn` — your choice, we use `npm`)

### Getting Started

1. Clone the repository:

```bash
git clone https://github.com/devenney/tracksmith-frontend.git
cd tracksmith-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Code Style

- Uses **ESLint** with React + Hooks rules
- Auto-formatting via **Prettier**
- Custom Tailwind theme via `@theme` in `index.css`

Run:

```bash
npm run lint
```

### Folder Structure

```
src/
├── components/    # Reusable components (e.g., Toggle.jsx)
├── assets/        # Images, icons
├── App.jsx        # App entrypoint
├── index.css      # Tailwind + theme config
└── main.jsx       # DOM entry
```

### Submitting Changes

1. Create a new branch:
   `git checkout -b feature/your-feature-name`

2. Make your changes and commit:
   `git commit -m "feat: your message"`

3. Push and open a PR:
   `git push origin feature/your-feature-name`
