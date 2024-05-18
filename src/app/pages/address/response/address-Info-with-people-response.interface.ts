import { AddressDetailsResponse } from './address-details-response.interface'
import { PersonDetailsResponse } from './person-details-response.interface'

export interface AddressInfoWithPeopleResponse {
    addressDetailsResponse: AddressDetailsResponse
    personDetailsResponseList: PersonDetailsResponse[]
}
