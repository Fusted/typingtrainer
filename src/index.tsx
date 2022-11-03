import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { QueryParamProvider } from "use-query-params"
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6"
import { reatomContext } from "@reatom/npm-react"
import { createCtx } from "@reatom/core"
import App from "views/App"

const ctx = createCtx()

ReactDOM.render(
    <React.StrictMode>
        <reatomContext.Provider value={ctx}>
            <BrowserRouter>
                <QueryParamProvider adapter={ReactRouter6Adapter}>
                    <Routes>
                        <Route path="/" element={<App />} />
                    </Routes>
                </QueryParamProvider>
            </BrowserRouter>
        </reatomContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
)
