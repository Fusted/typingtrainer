import { Lang } from "./languages"
import words from "./words"

const getRandomWords = (lang: Lang, lettersLimit: number): string => {
    let randomWords = ""
    const wordsData = words[lang]

    if (wordsData) {
        while (randomWords.length <= lettersLimit) {
            randomWords += wordsData[getRandomInt(wordsData.length)] + " "
        }
    } else {
        randomWords = "There is no words"
    }

    return randomWords
}

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max)
}

export { getRandomInt, getRandomWords }
