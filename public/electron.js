// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require ('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const url = require ('url')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { app, BrowserWindow } = require("electron")
// eslint-disable-next-line @typescript-eslint/no-var-requires
const isDev = require(`electron-is-dev`);

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
        },
    })

    win.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );
    // win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
