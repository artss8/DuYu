import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import started from 'electron-squirrel-startup';
import { DatabaseSync } from 'node:sqlite';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

let db;

const initDatabase = () => {
  const folder = app.getPath('userData');
  const file = path.join(folder, 'duyu.db');

  db = new DatabaseSync(file);
  db.exec(`
    CREATE TABLE IF NOT EXISTS tb_tasks (
      task_id INTEGER PRIMARY KEY AUTOINCREMENT,
      task_name TEXT NOT NULL,
      task_status INTEGER NOT NULL DEFAULT 0,
      task_category TEXT NOT NULL
    );
  `);
};

const registerHandlers = () => {
  ipcMain.handle('get-version', () => app.getVersion());

  ipcMain.handle('get-tasks', () => {
    return db.prepare(`
      SELECT task_id AS id,
             task_name AS taskName,
             task_status AS status,
             task_category AS category
      FROM tb_tasks
    `).all();
  });

  ipcMain.handle('add-task', (event, task) => {
    const result = db
      .prepare('INSERT INTO tb_tasks (task_name, task_category) VALUES (?, ?)')
      .run(task.taskName, task.category);

    return {
      id: Number(result.lastInsertRowid),
      taskName: task.taskName,
      status: 0,
      category: task.category,
    };
  });

  ipcMain.handle('toggle-task', (event, id) => {
    db.prepare('UPDATE tb_tasks SET task_status = 1 - task_status WHERE task_id = ?').run(id);
  });

  ipcMain.handle('remove-task', (event, id) => {
    db.prepare('DELETE FROM tb_tasks WHERE task_id = ?').run(id);
  });
};

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 700,
    height: 600,
    resizable: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
    },
  });

  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`),
    );
  }
};

app.whenReady().then(() => {
  initDatabase();
  registerHandlers();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});