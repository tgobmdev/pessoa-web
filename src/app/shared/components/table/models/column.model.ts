import { ActionColumnModel } from './action-column.model'

export interface ColumnModel {
	header: string
	field: string
	actions: ActionColumnModel[]
}

export type PartialColumnModel = Partial<ColumnModel>
