export type Listener<T extends unknown[] = unknown[]> = (...args: T) => void

export default class EventBus<E extends string = string, M extends { [K in E]: unknown[] } = Record<E, unknown[]>> {
    private listeners: { [key in E]?: Listener<M[E]>[] } = {}

    on (event: E, callback: Listener<M[E]>) {
        if (!this.listeners[event]) {
            this.listeners[event] = []
        }

        this.listeners[event]!.push(callback)
    }

    off (event: E, callback: Listener<M[E]>) {
        if (!this.listeners[event]) {
            throw new Error(`No such event: ${ event }`)
        }

        this.listeners[event] = this.listeners[event]!.filter(listener => listener !== callback)
    }

    emit (event: E, ...args: M[E]) {
        if (!this.listeners[event]) {
            return
            // throw new Error(`No such event: ${ event }`)
        }

        this.listeners[event]!.forEach(listener => listener(...args))
    }
}
