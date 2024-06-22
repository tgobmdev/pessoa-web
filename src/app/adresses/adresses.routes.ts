import { Routes } from '@angular/router'
import { AdressDetailComponent } from './adress-detail/adress-detail.component'
import { AdressListComponent } from './adress-list/adress-list.component'

export const ADRESSES_ROUTES: Routes = [
	{ path: '', component: AdressListComponent },
	{ path: ':slug', component: AdressDetailComponent },
]
