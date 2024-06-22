import { ActionColumn } from './action-column.interface'

export interface Column {
	header: string
	field: string
	actions: ActionColumn[]
}

export type PartialColumn = Partial<Column>
