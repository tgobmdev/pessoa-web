import { Routes } from '@angular/router'
import { AddressComponent } from './pages/address/address.component'
import { PersonComponent } from './pages/person/person.component'

export const routes: Routes = [
    {
        path: 'address',
        component: AddressComponent,
    },
    {
        path: 'person',
        component: PersonComponent,
    },
]
