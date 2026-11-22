# DuYu

A simple desktop task organizer with checklists grouped by category, built with **React**, **Electron** and **SQLite**.

DuYu is a small personal project: the goal is to learn by building, one working piece at a time.

## Features

- Add tasks (empty input is ignored)
- Mark tasks as done with a checkbox (done tasks are dimmed and struck through)
- Delete tasks, with a confirmation toast
- Assign each task a category: **Faculdade**, **Trabalho** or **Pessoal**
- See only the tasks of the selected category
- Tasks are saved locally in a SQLite database, so they are still there after closing the app

## Tech stack

- [Electron](https://www.electronjs.org/) with [Electron Forge](https://www.electronforge.io/)
- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- SQLite via Node's built-in [`node:sqlite`](https://nodejs.org/api/sqlite.html) module (no extra database install needed)
- [React Icons](https://react-icons.github.io/react-icons/)

## Getting started

### Requirements

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) 22 or newer (comes with npm)

### Run in development

```bash
git clone https://github.com/artss8/DuYu.git
cd DuYu
npm install
npm start
```

The app window opens automatically. The database file is created on the first run.

### Build an installer

```bash
npm run make
```

The output goes to the `out/make/` folder (on Windows, a Squirrel `Setup.exe`).

### Other scripts

| Command | What it does |
|---|---|
| `npm run package` | Package the app for the current platform (no installer) |
| `npm run lint` | Check code with oxlint and oxfmt |
| `npm run lint:fix` | Fix lint and formatting issues |

## Where is my data?

Tasks are stored in a `duyu.db` file inside Electron's user data folder:

| OS | Path |
|---|---|
| Windows | `%APPDATA%\duyu\duyu.db` |
| macOS | `~/Library/Application Support/duyu/duyu.db` |
| Linux | `~/.config/duyu/duyu.db` |

Deleting this file resets the app to an empty task list.

## How it works

```
React (renderer)  ──window.api──▶  preload.js  ──IPC──▶  main.js  ──▶  SQLite (duyu.db)
```

The React UI never touches the database or Node directly. The preload script exposes a small `window.api`
(`getTasks`, `addTask`, `toggleTask`, `removeTask`), and the main process runs the SQL queries.

## Project structure

```
src/
  main.js        # Electron main process: window, database and IPC handlers
  preload.js     # Exposes window.api to the React app
  renderer.jsx   # React app (UI and task logic)
  index.css      # Styles and fonts
```

## Roadmap

- [x] Delete tasks
- [x] Persist data with SQLite
- [ ] Create custom categories / projects
