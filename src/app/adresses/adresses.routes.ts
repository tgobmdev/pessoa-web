import { Routes } from '@angular/router'
import { AdressDetailComponent } from './adress-detail'
import { AdressListComponent } from './adress-list'

export const ADRESSES_ROUTES: Routes = [
	{ path: '', component: AdressListComponent },
	{ path: ':id', component: AdressDetailComponent },
]
