import { languages } from "./languages"
import words from "./words"

const getLanguages = async () => {
    return Object.values(languages)
}

const getRandomWords = async (language: string, lettersLimit: number) => {
    // TODO: сдедать типизацию и сделать синхронным
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const wordsData = await words[language]
    let randomWords = ""
    if (wordsData) {
        while (randomWords.length <= lettersLimit) {
            const newWord = wordsData[getRandomInt(wordsData.length)]
            randomWords += newWord + " "
        }
    } else randomWords = "There is no words"

    return randomWords
}

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max)
}

export { getRandomInt, getLanguages, getRandomWords }
