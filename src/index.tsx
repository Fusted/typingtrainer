import React from "react"
import { createCtx } from "@reatom/core"
import { reatomContext } from "@reatom/npm-react"
import ReactDOM from "react-dom"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Redirect } from "Redirect"
import App from "views/App"

const ctx = createCtx()
const router = createBrowserRouter([
    {
        path: "/",
        element: <Redirect />,
        errorElement: <Redirect />,
        children: [
            {
                path: "en",
                element: <App lang="en" />,
            },
            {
                path: "rus",
                element: <App lang="rus" />,
            },
        ],
    },
])

ReactDOM.render(
    <React.StrictMode>
        <reatomContext.Provider value={ctx}>
            <RouterProvider router={router} />
        </reatomContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
)
