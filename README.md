# Kramcode Website

Landing page for Kramcode – AI/Tech infrastructure company. Built with React (Vite), Tailwind CSS, Framer Motion, and Lucide React.

## Assets

Place these files in the **`public/`** folder so they are served at the root:

- **`logo.png`** – Company logo (used in the navbar)
- **`hero-animation.gif`** – Hero section loop (displayed in the monitor frame)

Until you add them, the navbar will show the text “Kramcode” and the hero will show the GIF area (with a gradient overlay if the GIF is missing).

## Commands

- `npm run dev` – Start dev server (**HTTPS** at `https://localhost:5173`; accept the self-signed cert warning in the browser if prompted)
- `npm run build` – Production build
- `npm run preview` – Preview production build

The site is responsive: layout, touch targets, and typography adapt for mobile and tablet. Use `npm run dev` and open the URL on your phone (same network) to test; the server listens on all interfaces (`host: true`).

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
