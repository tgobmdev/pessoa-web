import { ActionColumn } from './action-column.model'

export interface Column {
    header: string
    field: string
    actions: ActionColumn[]
}

export type PartialColumn = Partial<Column>
