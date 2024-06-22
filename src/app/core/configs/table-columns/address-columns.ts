import { ActionHandler } from '@components/table/models/action-handler.interface'
import { PartialColumn } from '@components/table/models/column.interface'

export const addressColumns = (actions: ActionHandler): PartialColumn[] => [
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
