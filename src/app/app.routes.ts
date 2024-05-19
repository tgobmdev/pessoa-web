import { Routes } from '@angular/router'
import { AddressComponent } from './pages/address/address.component'
import { AddressViewComponent } from './pages/address/components/address-view/address-view.component'
import { PersonComponent } from './pages/person/person.component'

export const routes: Routes = [
    {
        path: 'address',
        component: AddressComponent,
    },
    { path: 'address/:id', component: AddressViewComponent },
    {
        path: 'person',
        component: PersonComponent,
    },
]
