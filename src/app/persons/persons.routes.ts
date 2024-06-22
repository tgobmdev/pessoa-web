import { Routes } from '@angular/router'
import { PersonListComponent } from './person-list/person-list.component'

export const PERSONS_ROUTES: Routes = [
	{ path: '', component: PersonListComponent },
]
