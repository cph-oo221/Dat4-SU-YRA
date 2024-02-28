// main.js
import { app, BrowserWindow } from "electron";
import process from "process";

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL("http://localhost:5173/");
}

app.whenReady().then(() => {
  createWindow();
});

// Is needed for macOS - Else app will stay active even after colosing the window:
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
