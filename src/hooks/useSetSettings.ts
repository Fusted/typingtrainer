import {useEffect} from "react";
import settings from "../store/settings";

const useSetSettings = (): void => {
    useEffect(() => {
        const language = localStorage.getItem("typing-lan")
        const mode = localStorage.getItem("typing-mode")

        language ? settings.setLanguage(language) : "en"
        mode ? settings.setMode(mode) : "words"
    })
}
export default useSetSettings