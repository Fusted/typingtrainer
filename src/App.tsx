import "./app.scss"

import React from "react"
import { observer } from "mobx-react-lite"
import TypingContainer from "components/TypingContainer/TypingContainer"
import { createCtx } from "@reatom/core"
import { reatomContext} from "@reatom/npm-react"

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

export default observer(App)

