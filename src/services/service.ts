import txt from "./texts.json"

export default class Service {
    static getText = async (language: string) => {
    //TODO: Написать интерфейс для json или сделай уже норм api! И зачем тут await ?
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const textsArray = await txt.texts[language]
        const text = textsArray[getRandomInt(textsArray.length)]
        return await text
    }
}

export function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max)
}
