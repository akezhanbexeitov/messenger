export enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

export type TOptions = {
    method?: METHODS
    data?: Record<string, string>
    timeout?: number
    headers?: Record<string, string>
    tries?: number
}
