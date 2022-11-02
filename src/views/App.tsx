import "./app.scss"

import React from "react"
import TypingContainer from "components/TypingContainer/TypingContainer"

const App = (): React.ReactElement => {
    return (
        <div className="app">
            <TypingContainer />
        </div>
    )
}

export default App
