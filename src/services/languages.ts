import { Option } from "types/baseTypes"

type Lang = "rus" | "en"

const langs: Option<Lang>[] = [
    { value: "rus", label: "Русский" },
    { value: "en", label: "English" },
]

export { langs, type Lang }
