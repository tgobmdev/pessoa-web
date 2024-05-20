import { AddressResponse } from './address.model'
import { PersonResponse } from './person.model'

export interface AddressPeopleResponse {
    address: AddressResponse
    persons: PersonResponse[]
}
