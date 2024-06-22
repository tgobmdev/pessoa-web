import { Routes } from '@angular/router'

export const routes: Routes = [
	{
		path: 'addresses',
		loadChildren: () =>
			import('./adresses/adresses.routes').then((m) => m.ADRESSES_ROUTES),
	},
	{
		path: 'persons',
		loadChildren: () =>
			import('./persons/persons.routes').then((m) => m.PERSONS_ROUTES),
	},
]
