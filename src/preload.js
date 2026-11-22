import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('api', {
  getVersion: () => ipcRenderer.invoke('get-version'),
  getTasks: () => ipcRenderer.invoke('get-tasks'),
  addTask: (task) => ipcRenderer.invoke('add-task', task),
  toggleTask: (id) => ipcRenderer.invoke('toggle-task', id),
  removeTask: (id) => ipcRenderer.invoke('remove-task', id),
});