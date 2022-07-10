import React from "react"
import './app.scss'
import TypingContainer from "./components/TypingContainer/TypingContainer";
import {observer} from "mobx-react-lite";
import useSetSettings from "./hooks/useSetSettings";



function App() {

    useSetSettings()

    return (
        <div className="app">
            <TypingContainer />
        </div>
    )
}

export default observer(App)
