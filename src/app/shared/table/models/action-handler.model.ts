export interface ActionHandler<T = any> {
    [key: string]: (data: T) => void
}
