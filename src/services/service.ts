import txt from "./texts.json"
import words from "./words.json"

const getLanguages = async () => {
    const data = await txt.texts
    return Object.keys(data)
}

const getText = async (language: string) => {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const textsArray = await txt.texts[language]
    if (textsArray) {
        const text = await textsArray[getRandomInt(textsArray.length)]
        return await text
    } else {
        return 'There is no texts'
    }
}

const getRandomWords = async (language: string, lettersLimit: number) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const wordsData = await words.words[language]
    let randomWords = ""
    if (wordsData) {
        while (randomWords.length <= lettersLimit) {
            const newWord = wordsData[getRandomInt(wordsData.length)]
            randomWords += newWord + " "
        }
    } else randomWords = 'There is no words'

    return randomWords
}

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max)
}

export { getText, getRandomInt, getLanguages, getRandomWords }
