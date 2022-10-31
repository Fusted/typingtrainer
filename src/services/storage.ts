import { isLang, type Lang } from "./languages"

const getStorageLanguage = (): Lang => {
    const item = localStorage.getItem("typing-lan") || ""

    if (isLang(item)) {
        return item as Lang
    }

    return "en"
}

const setStorageLanguage = (lang: Lang): void => {
    localStorage.setItem("typing-lan", lang)
}

export { getStorageLanguage, setStorageLanguage }
