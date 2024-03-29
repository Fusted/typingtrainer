/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config()
const path = require("path")
const { app, BrowserWindow } = require("electron")

const isDev = require(`electron-is-dev`)

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
            ? process.env.LOCAL_URL
            : `file://${path.join(__dirname, "../build/index.html")}`
    )

    if (isDev) {
        win.webContents.openDevTools()
    }
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
