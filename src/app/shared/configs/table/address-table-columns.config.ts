import { ActionHandlerModel } from '@components/table/models/action-handler.model'
import { PartialColumnModel } from '@components/table/models/column.model'

export const addressTableColumnsConfig = (
	actions: ActionHandlerModel
): PartialColumnModel[] => [
	{ header: 'ID', field: 'id' },
	{ header: 'Street', field: 'street' },
	{ header: 'ZipCode', field: 'zipcode' },
	{ header: 'Street Number', field: 'streetNumber' },
	{ header: 'City', field: 'city' },
	{ header: 'State', field: 'state' },
	{ header: 'State Shortname', field: 'stateShortname' },
	{
		header: 'Actions',
		actions: [
			{
				tooltipTitle: 'View',
				icon: 'eye',
				onClick: ({ id }: { id: number }) => actions['actionView'](id),
			},
		],
	},
]
