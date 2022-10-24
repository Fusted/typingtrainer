import "./app.scss"

import React from "react"
import { createCtx } from "@reatom/core"
import { reatomContext} from "@reatom/npm-react"
import TypingContainer from "components/TypingContainer/TypingContainer"

const ctx = createCtx()

function App() {
    return (
        <div className="app">
            <reatomContext.Provider value={ctx}>
                <TypingContainer />
            </reatomContext.Provider>
        </div>
    )
}

export default App

