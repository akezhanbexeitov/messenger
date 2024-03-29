import constants from "../constants"

export enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

type TOptions = {
    method?: METHODS
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any
    timeout?: number
    headers?: Record<string, string>
    tries?: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type THTTPMethod = (url: string, options?: TOptions) => Promise<any>

export default class HTTPTransport {
    constructor(apiPath: string) {
        this.apiUrl = `${constants.HOST}${apiPath}`
    }

    private apiUrl: string = ""

    get: THTTPMethod = async (url, options = {}) => {
        const { response } = await this.request(`${this.apiUrl}${url}`, { ...options, method: METHODS.GET }, options.timeout)
        return this.checkResponse(response)
    }

    post: THTTPMethod = async (url, options = {}) => {
        const { response } = await this.request(`${this.apiUrl}${url}`, { ...options, method: METHODS.POST }, options.timeout)
        return this.checkResponse(response)
    }

    put: THTTPMethod = async (url, options = {}) => {
        const { response } = await this.request(`${this.apiUrl}${url}`, { ...options, method: METHODS.PUT }, options.timeout)
        return this.checkResponse(response)
    }

    delete: THTTPMethod = async (url, options = {}) => {
        const { response } = await this.request(`${this.apiUrl}${url}`, { ...options, method: METHODS.DELETE }, options.timeout)
        return this.checkResponse(response)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private checkResponse = (response: any) => {
        if (response === "OK") {
            return response
        } else {
            const result = JSON.parse(response)
            return result
        }
    }

    queryStringify = (data: Record<string, string>) => {
        if (typeof data !== 'object') {
            throw new Error('Data must be object')
        }
        const keys = Object.keys(data)
        return keys.reduce((result, key, index) => {
            return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`
        }, '?')
    }

    request = (url: string, options: TOptions = {}, timeout = 5000): Promise<XMLHttpRequest> => {
        const {
            headers = {},
            method,
            data
        } = options

        return new Promise((resolve, reject) => {
            if (!method) {
                reject('No method')
                return 
            }
            const xhr = new XMLHttpRequest()
            const isGet = method === METHODS.GET

            xhr.open(
                method,
                isGet && !!data
                    ? url + this.queryStringify(data)
                    : url
            )

            xhr.withCredentials = true
            
            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key])
            })

            xhr.onload = () => resolve(xhr)
            
            xhr.onabort = reject
            xhr.onerror = reject
            xhr.timeout = timeout
            xhr.ontimeout = reject

            if (isGet || !data) {
                xhr.send()
            } else if (data instanceof FormData) {
                xhr.send(data)
            } else {
                xhr.setRequestHeader('Content-Type', 'application/json')
                xhr.send(JSON.stringify(data))
            }
        })
    }
}
