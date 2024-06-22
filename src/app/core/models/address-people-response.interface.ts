import { AddressResponse } from './address-response.interface'
import { PersonResponse } from './person-response.interface'

export interface AddressPeopleResponse {
	address: AddressResponse
	persons: PersonResponse[]
}
