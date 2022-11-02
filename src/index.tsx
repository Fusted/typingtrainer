import React from "react"
import { createCtx } from "@reatom/core"
import { reatomContext } from "@reatom/npm-react"
import ReactDOM from "react-dom"
import App from "views/App"

const ctx = createCtx()

ReactDOM.render(
    <React.StrictMode>
        <reatomContext.Provider value={ctx}>
            <App />
        </reatomContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
)
