export interface DataColumn {
    type: 'data'
    header: string
    field: string
}
export interface Action<T> {
    tooltipTitle: string
    icon: string
    actionFunction: (data: T) => void
}
export interface ActionColumn<T> {
    type: 'action'
    header: string
    actions: Action<T>[]
}
export type Column = DataColumn | ActionColumn<any>
