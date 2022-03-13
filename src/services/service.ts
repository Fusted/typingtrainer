import texts from './texts.json'

export default class Service {
  static getText = async () => {
    return await texts
  }
}