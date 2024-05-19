export interface ActionHandlerModel<T = any> {
    [key: string]: (data: T) => void
}
