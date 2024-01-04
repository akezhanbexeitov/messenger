import { TOptions } from "./types"

const fetchWithRetry = (url: string, options: TOptions = {}): Promise<Response> => {
    const { tries = 1 } = options

    const onError = (err: Error) => {
        const triesLeft = tries - 1
        if (!triesLeft){
            throw err
        }

        return fetchWithRetry(url, {...options, tries: triesLeft})
    }

    return fetch(url, options).catch(onError)
}

export default fetchWithRetry
