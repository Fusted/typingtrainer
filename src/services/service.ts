import texts from "./texts.json"

export default class Service {
    static getText = async () => {
        return await texts
    }
}

export function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max)
}
