import { Option } from "types/baseTypes"

type Lang = "rus" | "en"

const ALL_LANGS = ["rus", "en"]

const isLang = (lang: string): boolean => {
    return ALL_LANGS.includes(lang)
}

const langs: Option<Lang>[] = [
    { value: "rus", label: "Русский" },
    { value: "en", label: "English" },
]

export { langs, isLang, type Lang }
