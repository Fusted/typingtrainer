import React, { useEffect } from "react"
import { useAtom } from "@reatom/npm-react"
import { languageAtom } from "atoms/config"
import { useNavigate } from "react-router"
import App from "views/App"

const useRedirect = () => {
    const navigate = useNavigate()
    const [language] = useAtom(languageAtom)

    useEffect(() => {
        navigate(`/${language}`)
    }, [language, navigate])
}

const Redirect = () => {
    const [language] = useAtom(languageAtom)
    useRedirect()
    
    return <App lang={language} />
}

export { useRedirect, Redirect }
