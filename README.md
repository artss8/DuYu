# DuYu

A simple desktop task organizer with checklists grouped by category, built with **React** and **Electron**.

DuYu is a small personal project: the goal is to learn by building, one working piece at a time.

## Features

- Add tasks (empty input is ignored)
- Mark tasks as done with a checkbox (done tasks are dimmed and struck through)
- Assign each task a category: **Faculdade**, **Trabalho** or **Pessoal**
- See only the tasks of the selected category

## Tech stack

- [Electron](https://www.electronjs.org/) with [Electron Forge](https://www.electronforge.io/)
- [React](https://react.dev/)
- [Vite](https://vite.dev/)

## Getting started

Requirements: [Node.js](https://nodejs.org/) and npm.

```bash
npm install
npm start
```

Other scripts:

| Command | What it does |
|---|---|
| `npm run package` | Package the app for the current platform |
| `npm run make` | Build installers/distributables |
| `npm run lint` | Check code with oxlint and oxfmt |
| `npm run lint:fix` | Fix lint and formatting issues |

## Project structure

```
src/
  main.js        # Electron main process (creates the window)
  preload.js     # Bridge between main and renderer
  renderer.jsx   # React app (UI and task logic)
  index.css      # Styles and fonts
```

## Roadmap

- [ ] Delete tasks
- [ ] Persist data with SQLite
- [ ] Create custom categories / projects

## License

