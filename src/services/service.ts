import txt from "./texts.json"
import words from "./words.json"

const getLanguages = async () => {
    const data = await txt.texts
    return Object.keys(data)
}

const getText = async (language: string) => {
    //TODO: Написать интерфейс для json или сделай уже норм api!
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const textsArray = await txt.texts[language]
    const text = textsArray[getRandomInt(textsArray.length)]
    return await text
}

const getRandomWords = async (language: string, lettersLimit: number) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const wordsData = await words.words[language]
    let randomWords = ""

    while (randomWords.length <= lettersLimit) {
        const newWord = wordsData[getRandomInt(wordsData.length)]
        randomWords += newWord + " "
    }
    return randomWords
}

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max)
}

export { getText, getRandomInt, getLanguages, getRandomWords }
