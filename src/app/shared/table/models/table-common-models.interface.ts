export interface DataColumn {
    type: 'data'
    header: string
    field: string
}
export interface Action {
    tooltipTitle: string
    icon: string
    handler: () => void
}
export interface ActionColumn {
    type: 'action'
    header: string
    actions: Action[]
}
export type Column = DataColumn | ActionColumn
